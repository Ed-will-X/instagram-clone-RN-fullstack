import React from "react"
// import { AsyncStorage } from "react-native"
import server from "../api/server"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SQLiteDatabase } from "react-native-sqlite-storage"

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

const getUserFromApi = async() => {
    const token = await AsyncStorage.getItem("token")
    try {
        const response = await server.get("/users/me", { headers: {
            "Authorization": `Bearer ${token}`
        } })
        await AsyncStorage.setItem("userData", response.data.user)

        return response
    } catch (error) {
        console.log(error)
    }
}

const getUserFromStorage = async() => {
    try {
        const user = await AsyncStorage.getItem("userData")
        if(user !== null){
            return JSON.parse(user)
        }
    } catch (error) {
        console.log(error)
    }
}

const editProfile = async() => {
    try {
        
    } catch (error) {
        
    }
}

const uploadImage = async(image) => {
    try {
        var formData = new FormData();
        formData.append('image', {
            uri: image.uri,
            name: 'pfp.png',
            filename: image.fileName,
            type: image.type
        })

        const token = await AsyncStorage.getItem("token")
        const response = await server.post("/users/me/profile-picture", formData,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
        })

        console.log("response", response.data)

        await AsyncStorage.setItem("userData", JSON.stringify(response.data.user))
        return response
    } catch (error) {
        console.log(error)
    }
}

const deleteProfilePic = () => {

}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ signUp, signIn, tryLocalSignIn, logout, getUserFromApi, getUserFromStorage, uploadImage }}>
            {children}
        </AuthContext.Provider>
    )
}