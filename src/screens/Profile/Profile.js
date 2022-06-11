import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ProfileInfo from '../OtherProfile/components/ProfileInfo'
import { MockContext } from '../../context/MockContext'
import Header from './components/Header'
import Button from '../../components/Button'

const Profile = ({ navigation }) => {
    const { currentUser } = useContext(MockContext)

    return(
        <View style={styles.viewPort}>
            <Header username={currentUser.username} />
            <ProfileInfo data={currentUser} />
            <View style={styles.buttonView}>
                <Button
                    text="Edit profile" width={330} height={30}
                    onPress={()=> navigation.navigate("EditProfile", {
                        data: currentUser
                    })}
                />
            </View>
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