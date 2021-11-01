import { formatDuration } from "../duration"

describe("Duration", () => {
  it("format", () => {
    const s50 = 50
    const res = formatDuration(s50)
    expect(res).toEqual("00:50")
    const min1 = 60
    const res2 = formatDuration(min1)
    expect(res2).toEqual("01:00")

    const m2s16 = 2 * 60 + 16
    const res3 = formatDuration(m2s16)
    expect(res3).toEqual("02:16")

    const m59s21 = 59 * 60 + 21
    const res4 = formatDuration(m59s21)
    expect(res4).toEqual("59:21")

    const hr1 = 60 * 60
    const res5 = formatDuration(hr1)
    expect(res5).toEqual("01:00:00")

    const hr2 = 63 * 60 + 37
    const res6 = formatDuration(hr2)
    expect(res6).toEqual("01:03:37")

    const hr3 = 2 * 60 * 60 + 47 * 60 + 1
    const res7 = formatDuration(hr3)
    expect(res7).toEqual("02:47:01")
  })
})
