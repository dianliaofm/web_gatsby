/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "电聊",
    i18n: {
      cn: {
        home: "首页",
        about: "关于",
        developer: "开发者",
      },
    },
  },

  plugins: ["gatsby-plugin-sass"],
}
