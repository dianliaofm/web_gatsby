exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const arr = [1, 2, 3, 4, 5];
  arr.forEach(x => {
    createPage({
      path: `/ep/${x}`,
      component: require.resolve("./src/templates/episode.js"),
      context: {
        id: x,
        title: `audio ${x}`
      },
    })
  })
}
