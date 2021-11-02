import { configureStore } from "@reduxjs/toolkit"
import playReducer from "./state/audioPlay"

export default configureStore({
  reducer: {
    play: playReducer,
  },
})
