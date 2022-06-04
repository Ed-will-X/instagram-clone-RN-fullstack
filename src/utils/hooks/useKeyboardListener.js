import React,{ useState, useEffect } from "react";
import { Keyboard } from 'react-native'

const useKeyboardListener = () => {
    const [ keyboardVisible, setKeyboardVisible ] = useState(false)

    useEffect(()=>{
        setKeyboardVisible(false)
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", ()=>{
            setKeyboardVisible(true)
        })

        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", ()=>{
            setKeyboardVisible(false)
        })

        return ()=>{
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    })

    return [ keyboardVisible ]
}

export default useKeyboardListener