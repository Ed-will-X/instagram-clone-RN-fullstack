import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import server from "../api/server"

export const UserContext = React.createContext()

const getUserFromApi = async() => {
    const token = await AsyncStorage.getItem("token")
    try {
        const response = await server.get("/users/me", { 
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
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

const editProfile = async({ type, value }) => {
    try {
        const token = await AsyncStorage.getItem("token")
        const response = await server.patch("/users/me", {
            [type]: value
        },
        {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        return response
    } catch (error) {
        console.log(error)
    }
}

const uploadProfilePic = async(image) => {
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

const deleteProfilePic = async() => {
    try {
        const token = await AsyncStorage.getItem("token")
        const response = await server.delete("/users/me/profile-picture", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        await AsyncStorage.setItem("userData", JSON.stringify(response.data.user))
        return response
    } catch (error) {
        console.log(error)
    }
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider
            value={{
                getUserFromApi,
                getUserFromStorage,
                uploadProfilePic,
                deleteProfilePic,
                editProfile
            }}>
            {children}
        </UserContext.Provider>
    )
}