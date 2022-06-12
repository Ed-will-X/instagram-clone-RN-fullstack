import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationEditText from './NavigationEditText'

const ProfileForm = ({ data }) => {
    return(
        <ScrollView style={styles.parent}>
            <Image style={styles.image} source={data.profilePic} />
            <TouchableOpacity activeOpacity={1} style={styles.textOpacity}>
                <Text style={styles.text}>Change profile photo</Text>
            </TouchableOpacity>
            <NavigationEditText title="Name" value={data.accountName} />
            <NavigationEditText title="Username" value={data.username} />
            <NavigationEditText title="Bio" />
        </ScrollView>
    )
}

export default ProfileForm

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        alignSelf: "center",
        borderRadius: 100
    },
    textOpacity: {
        alignSelf: "center"
    },
    text: {
        fontSize: 18,
        color: "#3493D9"
    }
})