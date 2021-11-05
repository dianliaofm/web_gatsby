import { atom } from "recoil"

export const playState = atom({
  key: "playState",
  default: false,
})

export const episodeListState = atom({
  key: "episodeListState",
  default: [],
})
