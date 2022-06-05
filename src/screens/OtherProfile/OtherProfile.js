import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import ProfileInfo from './components/ProfileInfo'
import ButtonsRow from './components/ButtonsRow'

const OtherProfile = ({ navigation, route }) => {
    return(
        <View style={styles.viewPort}>
            <Header username={route.params.data.username} navigation={navigation} />
            <ProfileInfo data={route.params.data} />
            <ButtonsRow />
        </View>
    )
}

export default OtherProfile

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white"
    }
})