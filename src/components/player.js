import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggle } from "../state/audioPlay"
import { setTime } from "../state/audioControl"
import AudioSlider from "../components/audioSlider"
import MiniControl from "../components/miniControl"

const Player = () => {
  const isPlaying = useSelector(st => st.play.isPlay)
  const dispatch = useDispatch()

  const currentSec = useSelector(s => s.control.currentSec)
  const totalSecs = useSelector(s => s.control.total)

  return (
    <div
      style={{
        position: "fixed",
        bottom: 5,
        width: "100%",
      }}
    >
      <AudioSlider
        currentSec={currentSec}
        totalSecs={totalSecs}
        changeFn={val => {
          dispatch(setTime(val))
        }}
      />
      <MiniControl
        toggleFn={() => dispatch(toggle(isPlaying))}
        isPlaying={isPlaying}
      />
    </div>
  )
}

export default Player
