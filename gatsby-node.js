const { fetchAll } = require("./fetch_eps")
const { map } = require("rxjs")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest, reporter },
  pluginOptions,
  cb
) => {
  const { createNode } = actions

  fetchAll("eps_meta", 15)
    .pipe(
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
      })
    )
    .subscribe({
      next: n => {
        createNode(n)
      },
      error: e => reporter.panicOnBuild("", e),
      complete: () => {
        reporter.info("Episode complete")
        cb()
      },
    })
}
