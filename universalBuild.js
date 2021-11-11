import Audio from "./src/components/htmlAudio"
import React from "react"
import { RecoilRoot as Provider } from "recoil"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <Audio />
      {element}
    </Provider>
  )
}
