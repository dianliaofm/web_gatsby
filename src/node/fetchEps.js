const { paginateScan, DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { fromJS, Map } = require("immutable")
const {
  from,
  map,
  mergeAll,
  take,
  pipe,
  groupBy,
  mergeMap,
  scan,
} = require("rxjs")

/**
 * Fetch all eps from db. Used only for building.
 */
exports.fetchAll = function (table, size, max) {
  return from(pageRequest(table, size)).pipe(
    map(x => x.Items),
    mergeAll(),
    take(max),
    map(toRawStringProps),
    map(normalizeStamp)
  )
}

const pageRequest = (table, size) => {
  const paginatorConfig = {
    client: new DynamoDBClient({}),
    pageSize: size,
  }
  const commandParams = { TableName: table }
  return paginateScan(paginatorConfig, commandParams)
}

// flatten Dynamo attributes to js object (string value)
const toRawStringProps = x =>
  fromJS(x)
    .entrySeq()
    .map(([k, v]) => {
      const val = v.get("N") || v.get("S")
      return Map([[k, val]])
    })
    .toKeyedSeq()
    .flatten(true)
    .toJS()

const normalizeStamp = x => {
  const stamp = parseInt(x.timestamp)
  if (isNaN(stamp)) {
    throw "timestamp empty"
  }
  return Object.assign(x, {
    timestamp: stamp,
  })
}

// make route key for episode with same datekey
function makeRouteKey(index, ep) {
  return Object.assign(ep, {
    routeKey: `${ep.dateKey}p${index}`,
  })
}

const groupAndMakeRoute = pipe(
  groupBy(x => x.date_key),
  mergeMap(eps$ =>
    eps$.pipe(
      scan((_, ep) => ep),
      map((ep, index) => {
        return {
          routeKey: `${ep.date_key}p${index + 1}`,
          ...ep,
        }
      })
    )
  )
)

module.exports = {
  groupAndMakeRoute,
  normalizeStamp,
}
