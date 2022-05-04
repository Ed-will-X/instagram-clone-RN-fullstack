
export const truncate = (str, cut) => {
    return  str.length > cut ? str.substring(0,cut) : str
}

export const formatActivityTimestamp = (timestamp, symbol) => {
    if(timestamp.split(symbol)[1] === ""){
        return parseInt(timestamp.split(symbol)[0])
    }
}