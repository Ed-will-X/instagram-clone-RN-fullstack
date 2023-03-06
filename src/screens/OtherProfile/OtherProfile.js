import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import Header from './components/Header'
import ProfileInfo from './components/ProfileInfo'
import ButtonsRow from './components/ButtonsRow'
import NoPosts from '../../components/NoPosts'
import { UsersContext } from '../../context/UsersContext'

const OtherProfile = ({ navigation, route }) => {
    const { getOtherUser } = useContext(UsersContext)
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const i = async() => {
            try {
                const user = await getOtherUser({ username: route.params.data.username })
                setUser(user.user)
            } catch (error) {
                console.log(error)
            }
        }
        i()
    }, []);
    return(
        <View style={styles.viewPort}>
            {user ? (
                <View>
                    <Header username={user.username} navigation={navigation} />
                    <ProfileInfo data={user} />
                    <ButtonsRow user={user} />
                </View>
            ): <View style={styles.spinnerViewPort}>
                    <ActivityIndicator style={styles.spinner} size={50} color="black" />
                </View>}
        </View>
    )
}

export default OtherProfile

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white",
        flex: 1
    },
    spinner: {
        
    },
    spinnerViewPort: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})