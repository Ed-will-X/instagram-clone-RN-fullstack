import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProfileInfo from '../OtherProfile/components/ProfileInfo'
import { MockContext } from '../../context/MockContext'
import Header from './components/Header'
import Button from '../../components/Button'
import { AuthContext } from '../../context/AuthContext'

const Profile = ({ navigation }) => {
    const { currentUser } = useContext(MockContext)
    const { logout, getUserFromStorage } = useContext(AuthContext)
    const [ user, setUser ] = useState({})

    useEffect(async()=>{
        const user = await getUserFromStorage()
        setUser(user)

        // cleanup user
        // return ()=>{
        //     setUser({})
        // }
    },[])


    return(
        <View style={styles.viewPort}>
            <Header username={user.username} />
            <ProfileInfo data={user} mockData={currentUser} />
            <View style={styles.buttonView}>
                <Button
                    text="Edit profile" width={330} height={30}
                    onPress={()=> navigation.navigate("EditProfile", {
                        data: currentUser
                    })}
                />
            </View>
            {/* <Button
                text="Logout" width={330} height={30}
                onPress={()=> {
                    logout()
                    navigation.navigate("SignedOutStack")
                }}
            /> */}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white"
    },
    buttonView: { 
        alignItems: "center",
        marginVertical: 10
    }
})