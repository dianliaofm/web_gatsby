import React, { useRef, useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  episodeListState,
  currentSecState,
  playState,
  totalSecsState,
} from "../state/store"

const CustomAudioContainer = ({ url }) => {
  const [trackProgress, setTrackProgress] = useRecoilState(currentSecState)
  const isPlaying = useRecoilValue(playState)
  const setTotalSecs = useSetRecoilState(totalSecsState)

  //ref
  const audioRef = useRef(new Audio(url))
  const intervalRef = useRef()

  const { duration } = audioRef.current
  useEffect(() => {
    setTotalSecs(duration)
  }, [duration])

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

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setTrackProgress(audioRef.current.currentTime)
      }
    }, [1000])
  }

  return <></>
}

const CustomAudioManager = () => {
  const eps = useRecoilValue(episodeListState)
  if (eps.length < 1) {
    return null
  }
  const currentIndex = 0
  const currentEp = eps[currentIndex]
  if (!currentEp) {
    return null
  }
  let url = currentEp.url
  if (!url || url.length < 10) {
    return null
  }
  return <CustomAudioContainer url={url} />
}

export default CustomAudioManager
