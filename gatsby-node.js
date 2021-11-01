exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    watchOptions: {
      ignored: "**/node_modules",
    },
  })
}
