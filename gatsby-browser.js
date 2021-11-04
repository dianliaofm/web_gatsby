/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
const React = require("react")
const Provider = require("recoil").RecoilRoot

exports.wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
