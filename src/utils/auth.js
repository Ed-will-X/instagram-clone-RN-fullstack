import { parsePhone, parseUsername, parseEmail } from "./usefulAlgorithms"

export const handleUserPropsValidate = (prop) =>{
    let isValid = false
    let type = ""

    // email check
    if(parseEmail(prop)){
        isValid = true
        type = "email"
    }else if(parsePhone(prop)){
        isValid = true
        type = "phone"
    }else if(parseUsername(prop)){
        isValid = true
        type= "username"
    }else{
        isValid = false
    }

    return {
        isValid: isValid,
        type: type,
    }
}

export const handlePasswordValidate = (password) => {
    const banned = "[]\\{}[]|:';,<>/`~()"
    if(password.length <= 6){
        return false
    }

    for(let letter of password){
        if(banned.split("").includes(letter)){
            return false
        }
    }

    return true
}