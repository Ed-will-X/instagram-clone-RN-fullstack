import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ProfileInfo from '../OtherProfile/components/ProfileInfo'
import { MockContext } from '../../context/MockContext'
import Header from './components/Header'
import Button from '../../components/Button'

const Profile = () => {
    const { currentUser } = useContext(MockContext)
    console.log(currentUser)
    return(
        <View style={styles.viewPort}>
            <Header username={currentUser.username} />
            <ProfileInfo data={currentUser} />
            <TouchableOpacity style={styles.buttonOpacity}>
                <Button text="Edit profile" width={330} height={30} />
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white"
    },
    buttonOpacity: { 
        alignItems: "center",
        marginVertical: 10
    }
})