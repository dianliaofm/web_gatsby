import React, { useRef } from "react"

const Audio = ({ src, isPlaying }) => {
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
