const formatStamp = (stamp)  => {
    const date = new Date(stamp * 1000)
    return date.toDateString()
}

export {
    formatStamp
}