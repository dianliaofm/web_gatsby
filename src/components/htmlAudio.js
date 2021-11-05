import { useStaticQuery, graphql } from "gatsby"
import React, { useRef, useState } from "react"
import { useRecoilValue } from "recoil"
import { playState } from "../state/store"

const episodesQuery = graphql`
  query EpQuery {
    allEpisode {
      nodes {
        image
        epId
        url
        title
      }
    }
  }
`

const Audio = () => {
  const data = useStaticQuery(episodesQuery)
  const eps = data.allEpisode.nodes

  const [trackIndex, setTrackIndex] = useState(1)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { title, image, epId, url } = eps[trackIndex]

  //ref
  // const audioRef = useRef(new Audio(url))
  const intervalRef = useRef()
  const isReady = useRef(false)

  // const { duration } = audioRef.current

  const toPrevTrack = () => {
    console.log("to prev")
  }

  const toNextTrack = () => {
    console.log("to next")
  }
  return (
    <div>
      <div>
        <img src={image} alt={`track ${epId}: ${title}`} />
        <h2>
          {epId} {title}
        </h2>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div>
    </div>
  )
}

export default Audio

const AudioControls = ({
  onPrevClick,
  isPlaying,
  onPlayPauseClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      Prev
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        Pause
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        Play
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      Next
    </button>
  </div>
)
