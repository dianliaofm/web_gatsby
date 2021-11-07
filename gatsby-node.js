const eps = [
  {
    image:
      "http://cdn.lizhi.fm/audio_cover/2021/10/25/2903118638241665031_80x80.jpg",
    title: "test ep 1",
    url: "http://cdn.lizhi.fm/audio/2021/10/25/2903118635502990342_ud.mp3",
    epId: 1,
  },
  {
    image: "",
    title: "test ep 2",
    url: "http://cdn.lizhi.fm/audio/2021/10/29/2903886005449222150_ud.mp3",
    epId: 2,
  },
  {
    image: "https://sls11.s3.amazonaws.com/thumb2.jpg",
    title: "test ep 3",
    url: "http://podcast40.oss-cn-shanghai.aliyuncs.com/test1.mp3",
    epId: 3,
  },
]

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  eps
    .map(x => {
      const nodeMeta = {
        routeKey: x.epId,
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
