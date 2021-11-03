// import { useStaticQuery } from "gatsby"
import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"
import Player from "./player"
import React from "react"
import Layout from './layout'

const playState = atom({
  key: "playState",
  default: false,
})

const LayoutMeta = ({ pageTitle, children }) => {
  const [isPlaying, setIsPlaying] = useRecoilState(playState)

  const player = (
    <Player isPlaying={isPlaying} toggleFn={() => setIsPlaying(!isPlaying)} />
  )

  return (
    <Layout pageTitle={pageTitle} player={player}>
      {children}
    </Layout>
  )
}

const ProviderLayoutMeta = ({ children, ...rest }) => (
  <RecoilRoot>
    <LayoutMeta {...rest}>{children}</LayoutMeta>
  </RecoilRoot>
)

export default ProviderLayoutMeta
