import { useStaticQuery, graphql } from "gatsby"
import React, { useRef } from "react"
import { useRecoilValue } from "recoil"
import { playState } from "../state/store"

const episodesQuery = graphql`
  query EpQuery {
    allEpisode {
      nodes {
        url
      }
    }
  }
`

const Audio = () => {
  const data = useStaticQuery(episodesQuery)
  const eps = data.allEpisode.nodes

  const src = eps[1].url
  const isPlaying = useRecoilValue(playState)

  const audioEl = useRef(null)
  if (audioEl && audioEl.current) {
    if (isPlaying) {
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
  }

  return (
    <audio controls ref={audioEl}>
      <source src={src} type="audio/mpeg" />
    </audio>
  )
}

export default Audio
