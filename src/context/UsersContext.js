import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import server from "../api/server";


export const UsersContext = React.createContext()

const searchUsers = async({ term, token }) => {
    try {
        const response = await server.post(`/users/search/${term}`, {},{
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}

const getOtherUser = async({ username }) => {
    try {
        const token = await AsyncStorage.getItem("token")
        const response = await server.get(`/users/${username}`,{
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type' : 'application/json'
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}

const followUser = async({ username }) => {
    try {
        const token = await AsyncStorage.getItem("token")
        const response = await server.post(`users/${username}/follow`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}

const unfollowUser = async({ username }) => {
    try {
        const token = await AsyncStorage.getItem("token")
        const response = await server.post(`users/${username}/unfollow`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const UsersProvider = ({ children }) => {
    return(
        <UsersContext.Provider value={{
            searchUsers,
            getOtherUser,
            followUser,
            unfollowUser
        }}>
            {children}
        </UsersContext.Provider>
    )
}