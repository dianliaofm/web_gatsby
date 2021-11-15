const { fetchAll } = require("./src/node/fetch_eps")
const { map, lastValueFrom, tap, catchError, of, last } = require("rxjs")

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions

  const pageSize = parseInt(process.env.EP_PAGE_SIZE) || 15
  const epMax = parseInt(process.env.EP_MAX) || 500

  const ep$ = fetchAll(process.env.EP_TABLE, pageSize, epMax).pipe(
    map(x => {
      reporter.info(`Episode: ${x.title}`)
      const nodeMeta = {
        routeKey: x.timestamp,
        id: createNodeId(`Episode-${x.timestamp}`),
        parent: null,
        children: [],
        internal: {
          type: "Episode",
          mediaType: "application/json",
          content: JSON.stringify(x),
          contentDigest: createContentDigest(x),
        },
      }

      return Object.assign({ epId: x.timestamp }, x, nodeMeta)
    }),
    tap(n => {
      createNode(n)
    }),
    catchError(e => {
      reporter.panicOnBuild("", e)
      return of(`Episode fetch failed: ${e}`)
    }),
    last(),
    tap(() => {
      reporter.info("Episode sourcing complete")
    })
  )

  await lastValueFrom(ep$)
}
