import React from "react"
// import { AsyncStorage } from "react-native"
import mainServer from "../api/mainServer"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = React.createContext()

const signUp = async({email, username, password}) => {
    try {
        const response = await mainServer.post("/signup", { email, password })
        console.log(response.token)
    } catch (error) {
        return { error: error }
    }
}

const signIn = async({ userProp, password, type }) => {
    var response;

    try {
        if(type === "email"){
            response = await mainServer.post("/login", { email: userProp, password })
        }

        try {
            await AsyncStorage.setItem("token", response.data.token)
        } catch (error) {
            console.log(error)
        }
        return response.data
    } catch (error) {
        return { error: error }
    }
}

const tryLocalSignIn = async() => {
    const token = await AsyncStorage.getItem("token")
    return token
}

const logout = async() => {
    await AsyncStorage.removeItem("token")
}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ signUp, signIn, tryLocalSignIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}