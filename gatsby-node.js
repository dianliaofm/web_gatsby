exports.createPages = async ({ actions }) => {
  const { createPage, createNode } = actions
  const arr = [1, 2, 3, 4, 5]
  arr.forEach(x => {
    createPage({
      path: `/ep/${x}`,
      component: require.resolve("./src/templates/episode.js"),
      context: {
        id: x,
        title: `audio ${x}`,
      },
    })
  })
}

const eps = [
  {
    image: "https://sls11.s3.amazonaws.com/thumb1.jpg",
    title: "test ep 1",
    epId: 1001,
  },
  {
    image: "https://sls11.s3.amazonaws.com/thumb2.jpg",
    title: "test ep 2",
    epId: 1002,
  },
]

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  eps
    .map(x => {
      const nodeMeta = {
        id: createNodeId(`Episode-${x.epId}`),
        parent: null,
        children: [],
        internal: {
          type: "Episode",
          mediaType: "application/json",
          content: JSON.stringify(x),
          contentDigest: createContentDigest(x),
        },
      }

      return Object.assign({}, x, nodeMeta)
    })
    .forEach(n => {
      createNode(n)
    })
}
