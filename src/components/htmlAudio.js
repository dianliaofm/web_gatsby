import { useStaticQuery, graphql } from "gatsby"
import React, { useRef, useState, useEffect } from "react"
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

const CustomAudioContainer = () => {
  const data = useStaticQuery(episodesQuery)
  const eps = data.allEpisode.nodes

  const [trackIndex, setTrackIndex] = useState(1)
  const [trackProgress, setTrackProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const { title, image, epId, url } = eps[trackIndex]

  //ref
  const audioRef = useRef(new Audio(url))
  const intervalRef = useRef()
  const isReady = useRef(false)

  const { duration } = audioRef.current

  const toPrevTrack = () => {
    const prev_index = trackIndex < 1 ? eps.length : trackIndex - 1
    setTrackIndex(prev_index)
  }

  const toNextTrack = () => {
    const next_index = trackIndex < eps.length - 1 ? trackIndex + 1 : 0
    setTrackIndex(next_index)
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    audioRef.current.pause()
    audioRef.current = new Audio(url)
    setTrackProgress(audioRef.current.currentTime)

    if (isReady.current) {
      audioRef.current.play()
      setIsPlaying(true)
      startTimer()
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true
    }
  }, [trackIndex])

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack()
      } else {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  const onScrub = value => {
    // Clear any timers already running
    clearInterval(intervalRef.current)
    audioRef.current.currentTime = value
    setTrackProgress(audioRef.current.currentTime)
  }

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true)
    }
    startTimer()
  }

  return (
    <div>
      <div>
        <img src={image} alt={`track ${epId}: ${title}`} />
        <h2>
          {epId} {title}
        </h2>
        <CustomAudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={e => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>
    </div>
  )
}

export default CustomAudioContainer

const CustomAudioControls = ({
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
