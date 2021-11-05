/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import Audio from "./src/components/htmlAudio"
import React from 'react'
import { RecoilRoot as Provider } from "recoil"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <Audio />
      {element}
    </Provider>
  )
}
