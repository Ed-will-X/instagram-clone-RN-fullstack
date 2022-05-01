
export const truncate = (str, cut) => {
    return  str.length > cut ? str.substring(0,cut) : str
}

export const formatActivityTimestamp = (timestamp) => {
    return parseInt(timestamp.split('w')[0])
}