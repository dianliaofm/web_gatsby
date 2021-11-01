import { formatDuration } from '../duration'

describe('Duration', () => {
    it("format", () => {
        let sec = 60 * 60
        let res = formatDuration(sec)
        expect(res).toEqual(60)
    })
})
