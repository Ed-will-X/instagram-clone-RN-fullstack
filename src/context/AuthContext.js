import React from "react"
// import { AsyncStorage } from "react-native"
import server from "../api/server"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = React.createContext()

const signUp = async({email, username, name, password}) => {
    try {
        const response = await server.post("/signup", { email, fullname: name, username, password })
        try {
            await AsyncStorage.setItem("token", response.data.token)
            await AsyncStorage.setItem("userData", JSON.stringify(response.data.user))
        } catch (error) {
            console.log(error)
        }

        return response.data
    } catch (error) {
        return { error: error }
    }
}

const signIn = async({ userProp, password, type }) => {
    var response;

    try {
        if(type === "email"){
            response = await server.post("/login", { email: userProp, password })
        }

        try {
            await AsyncStorage.setItem("token", response.data.token)
            await AsyncStorage.setItem("userData", JSON.stringify(response.data.user))
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
    try {
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("userData")
    } catch (error) {
        console.log(error)
    }
}


export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ signUp, signIn, tryLocalSignIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}