const { paginateScan, DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { fromJS, Map } = require("immutable")
const { from, map, mergeAll, take } = require("rxjs")

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

exports.normalizeStamp = normalizeStamp
