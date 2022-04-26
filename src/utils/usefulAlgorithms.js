
export const truncate = (str, cut) => {
    return  str.length > cut ? str.substring(0,cut) : str
}
