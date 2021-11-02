import { configureStore } from "@reduxjs/toolkit"
import playReducer from "./state/audioPlay"
import controlReducer from "./state/audioControl"

export default configureStore({
  reducer: {
    play: playReducer,
    control: controlReducer
  },
})
