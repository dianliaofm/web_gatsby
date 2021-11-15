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
        title: "one",
      },
      {
        date_key: "202102",
        title: "one",
      },
    ]
    const ep$ = from(data).pipe(
      groupAndMakeRoute,
      tap(x => {
        expect(x).toEqual(
          expect.objectContaining({
            routeKey: expect.stringMatching(/^202\d{3}p\d$/),
            title: "one",
          })
        )
      })
    )
    await lastValueFrom(ep$)
  })
})
