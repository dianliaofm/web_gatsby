/**
 * format seconds to padded string
 * < 1h: 00:40, 20:31, 59:11
 * >= 1h: 01:00:12, 02:28:44
 * @param {integer} seconds
 * @returns string
 */
const formatDuration = seconds => {
  const s = seconds % 60
  const mins = (seconds - s) / 60
  if (mins < 60) {
    return `${pad(mins)}:${pad(s)}`
  } else {
    const min_remainder = mins % 60
    const hrs = (mins - min_remainder) / 60
    return `${pad(hrs)}:${pad(min_remainder)}:${pad(s)}`
  }
}

const pad = x => (x > 9 ? `${x}` : `0${x}`)

export { formatDuration }
