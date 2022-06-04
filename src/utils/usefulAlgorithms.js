
export const truncate = (str, cut) => {
    return  str.length > cut ? str.substring(0,cut) : str
}

export const formatActivityTimestamp = (timestamp, symbol) => {
    if(timestamp.split(symbol)[1] === ""){
        return parseInt(timestamp.split(symbol)[0])
    }
}

export const parsePhone = (str) =>{
    var max = 15
    if(typeof str !== "string"){
        return false
    }
    
    if(str.includes("+")){
        if(str[0] !== "+"){
            return false
        }
        max = 16
    }
    
    for(let item of str){
        let nums = "1234567890+"
        if(!nums.split("").includes(item)){
            return false
        }
    }
    
    if(str.length <= 10 || str.length > max){
      return false
    }
    
    return true
}

export const parseUsername = (str) => {
    const nums = "1234567890._"
    const allowed = "1234567890qwertyuiopasdfghjklzxcvbnm._"

    if(str.length === 0){
        return false
    }

    if(nums.split("").includes(str[0])){
        return false
    }

    for(let item of str){
        if(!allowed.split("").includes(item)){
            return false
        }
    }
    
    if(str.length > 30){
        return false
    }
    
    return true
}

export const parseEmail = (str) =>{
    let isValid = false

    if(str[0] === "@" || str[0] === "." || str[1] === "."){
        isValid = false
    }
    
    if(str.includes("@") && str.includes(".")){
        isValid = true
    }

    return isValid
}

