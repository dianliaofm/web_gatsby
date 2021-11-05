import { atom } from "recoil"

const audioUrlState = atom({
  key: "audioUrlState",
  default: "",
})

const playState = atom({
  key: "playState",
  default: false,
})

export { audioUrlState, playState }
