import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProfileInfo from '../OtherProfile/components/ProfileInfo'
import { MockContext } from '../../context/MockContext'
import Header from './components/Header'
import Button from '../../components/Button'
import { AuthContext } from '../../context/AuthContext'
import { withNavigationFocus } from '@react-navigation/compat'
import useGetUser from '../../utils/hooks/useGetUser'

const Profile = ({ navigation }) => {
    const { currentUser } = useContext(MockContext)
    const { getUserFromStorage } = useContext(AuthContext)
    // const [ user, setUser ] = useState({})

    const [ user ] = useGetUser(navigation)
    

    // useEffect(async()=>{
    //     const userProps = await getUserFromStorage()
    //     setUser(userProps)
    //     console.log("profile use effect")

    //     const unsubscribe = navigation.addListener('focus', async() => {
    //         const userProps = await getUserFromStorage()
    //         setUser(userProps)
    //     });

    //     return unsubscribe;
    // },[])
    


    return(
        <View style={styles.viewPort}>
            <Header username={user.username} />
            <ProfileInfo data={user} mockData={currentUser} />
            <View style={styles.buttonView}>
                <Button
                    text="Edit profile" width={330} height={30}
                    onPress={()=> navigation.navigate("EditProfile", {
                        data: user
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

export default withNavigationFocus(Profile)

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white"
    },
    buttonView: { 
        alignItems: "center",
        marginVertical: 10
    }
})