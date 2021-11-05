const episodeQuery = `
  query epQuery {
    allEpisode {
      nodes {
        epId
        image
        title
      }
    }
  }`

const eps = [
  {
    image: "https://sls11.s3.amazonaws.com/thumb1.jpg",
    title: "test ep 1",
    epId: 2,
  },
  {
    image: "https://sls11.s3.amazonaws.com/thumb2.jpg",
    title: "test ep 2",
    url: "http://podcast40.oss-cn-shanghai.aliyuncs.com/test1.mp3",
    epId: 3,
  },
]

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(episodeQuery)
  if (result.errors) {
    throw result.errors
  }

  const arr = result.data.allEpisode.nodes
  arr.forEach(x => {
    createPage({
      path: `/ep/${x.epId}`,
      component: require.resolve("./src/templates/episode.js"),
      context: {
        id: x.epId,
        title: x.title,
      },
    })
  })
}

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
