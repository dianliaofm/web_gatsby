import { atom } from "recoil"

export const playState = atom({
  key: "playState",
  default: false,
})

export const episodeListState = atom({
  key: "episodeListState",
  default: [],
})

export const currentEpisodeIdState = atom({
  key: "currentIndexState ",
  default: 0,
})