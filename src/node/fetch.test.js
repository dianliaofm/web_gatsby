const { normalizeStamp, groupAndMakeRoute } = require("./fetchEps")
const { from, lastValueFrom, tap } = require("rxjs")

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

  test("route", async () => {
    const data = [
      {
        date_key: "202001",
        title: "one",
      },
      {
        date_key: "202001",
        title: "one",
      },
      {
        date_key: "202001",
        title: "one",
      },
      {
        date_key: "202002",
        title: "two",
      },
      {
        date_key: "202102",
        title: "two",
      },
    ]
    const ep$ = groupAndMakeRoute(from(data)).pipe(
      tap(x => {
        console.log(x);
      })
    )
    await lastValueFrom(ep$)
  })
})
