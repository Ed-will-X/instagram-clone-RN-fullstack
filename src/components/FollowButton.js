import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{ useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { UsersContext } from '../context/UsersContext'

const FollowButton = ({ user }) => {
    const [ follow, setFollow ] = useState(false)

    const { getUserFromStorage } = useContext(UserContext)
    const { followUser, unfollowUser } = useContext(UsersContext)

    useEffect(async()=>{
        const currentUser = await getUserFromStorage()
        console.log(user._id)
        console.log(currentUser.followingList)
        if(currentUser.followingList.includes(user._id)){
            setFollow(true)
        }else{
            setFollow(false)
        }
    }, [])

    const handleFollow = async() => {
        if(!follow){
            const response = await followUser({ username: user.username })
            console.log(response)
            setFollow(true)
        }else{
            const response = await unfollowUser({ username: user.username })
            setFollow(false)
            console.log(response)
        }
    }

    return(
        <TouchableOpacity activeOpacity={1} style={[styles.opacity, {
            backgroundColor: follow ? null : "#3493D9",
            borderWidth: follow ? 1 : 0,
            borderColor: '#DEDEDE'
        }]}
        onPress={async()=>{
            await handleFollow()
        }}
        >
            <Text style={[styles.text, {
                color: follow ? "black" : "white",
            }]}>{follow ? "Following" : "Follow"}</Text>
        </TouchableOpacity>
    )
}

export default FollowButton

const styles = StyleSheet.create({
    opacity: {
        height: 33,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150
    },
    text: {
        fontWeight: "bold"
    }
})