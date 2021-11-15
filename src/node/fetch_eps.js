const { paginateScan, DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { fromJS, Seq, Map } = require("immutable")
const { from, map, mergeAll, take } = require("rxjs")

/**
 * Fetch all eps from db. Used only for building.
 */
exports.fetchAll = function (table, size, max) {
  const paginatorConfig = {
    client: new DynamoDBClient({}),
    pageSize: size,
  }
  const commandParams = { TableName: table }
  const paginator = paginateScan(paginatorConfig, commandParams)

  return from(paginator).pipe(
    map(x => x.Items),
    mergeAll(),
    take(max),
    map(x =>
      fromJS(x)
        .entrySeq()
        .map(([k, v]) => {
          const val = v.get("N") || v.get("S")
          return Map([[k, val]])
        })
        .toKeyedSeq()
        .flatten(true)
        .toJS()
    )
  )
}
