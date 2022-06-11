import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import ProfileForm from './components/ProfileForm'

const EditProfile = ({ route }) => {
    const data = route.params.data
    return (
        <View style={styles.viewPort}>
            <Header />
            <ProfileForm data={data} />
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white",
        flex: 1
    }
})