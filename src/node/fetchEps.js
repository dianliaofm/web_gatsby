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
  filter,
  toArray,
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

const groupAndMakeRoute = pipe(
  groupBy(x => x.date_key),
  mergeMap(eps$ => eps$.pipe(toArray())),
  filter(arr => arr.length > 1),
  map(eps =>
    eps.map((x, i) => ({
      routeKey: `${x.date_key}p${i + 1}`,
      ...x,
    }))
  ),
  mergeAll()
)

module.exports = {
  groupAndMakeRoute,
  normalizeStamp,
}
