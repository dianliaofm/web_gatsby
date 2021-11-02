import { createSlice } from "@reduxjs/toolkit"

export const playSlice = createSlice({
  name: "audio_play",
  initialState: {
    isPlay: false,
  },
  reducers: {
    toggle: state => {
      const old = state.isPlay
      state.isPlay = !old
    },
    pause: state => {
      state.isPlay = false
    },
    play: state => {
      state.isPlay = true
    },
  },
})

export const { play, pause, toggle } = playSlice.actions

export default playSlice.reducer
