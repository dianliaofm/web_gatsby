import Audio from "./src/components/htmlAudio"
import React from "react"
import { RecoilRoot as Provider } from "recoil"
import ClientCache from "./src/components/clientCache"

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <ClientCache />
      <Audio />
      {element}
    </Provider>
  )
}
