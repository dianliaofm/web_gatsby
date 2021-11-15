const { paginateScan, DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { fromJS, Map } = require("immutable")
const {
  from,
  map,
  mergeAll,
  take,
  groupBy,
  mergeMap,
  toArray,
  partition,
  concat,
} = require("rxjs")

/**
 * Fetch all eps from db. Used only for building.
 */
const fetchAll = function (table, size, max) {
  const ep$ = from(pageRequest(table, size)).pipe(
    map(x => x.Items),
    mergeAll(),
    take(max),
    map(toRawStringProps),
    map(normalizeStamp)
  )

  return groupAndMakeRoute(ep$)
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

const groupAndMakeRoute = ep$ => {
  const epArr$ = ep$.pipe(
    map(x =>
      Object.assign(x, {
        routeKey: x.date_key,
      })
    ),
    groupBy(x => x.date_key),
    mergeMap(eps$ => eps$.pipe(toArray()))
  )

  const [singArr$, duplicateArr$] = partition(epArr$, arr => arr.length <= 1)

  return concat(
    singArr$,
    duplicateArr$.pipe(
      map(eps =>
        eps.map((x, i) =>
          Object.assign(x, {
            routeKey: `${x.date_key}p${i + 1}`,
          })
        )
      )
    )
  ).pipe(mergeAll())
}

module.exports = {
  groupAndMakeRoute,
  normalizeStamp,
  fetchAll,
}
