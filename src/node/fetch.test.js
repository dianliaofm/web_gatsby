const { normalizeStamp } = require("./fetchEps")

describe("fetch", () => {
  test("stamp", () => {
    const ob = {
      timestamp: "1661",
      name: "Jack",
      age: 22,
    }

    const ob1 = normalizeStamp(ob)
    expect(ob1).toEqual({
      timestamp: 1661,
      name: "Jack",
      age: 22,
    })

    const ob2 = {
      timestamp: "abcd",
      name: "Jack",
      age: 22,
    }
    expect(normalizeStamp.bind(null, ob2)).toThrowError()
  })
})
