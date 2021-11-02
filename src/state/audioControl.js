import { createSlice } from "@reduxjs/toolkit"

export const controlSlice = createSlice({
  name: "audio_control",
  initialState: {
    currentSec: 60,
    total: 100,
  },
  reducers: {
    setTime: (state, action) => {
      state.currentSec = action.payload
    },
  },
})

export const { setTime } = controlSlice.actions

export default controlSlice.reducer
