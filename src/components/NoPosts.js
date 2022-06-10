import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"

const NoPosts = () => {
    return(
        <View style={styles.parent}>
            <View style={styles.circle}>
                <Ionic style={styles.camera} name="camera-outline" />
            </View>
            <Text style={styles.text}>No Posts Yet</Text>
        </View>
    )
}

export default NoPosts

const styles = StyleSheet.create({
    parent: {
        justifyContent: "center",
        alignItems: "center"
    },
    circle: {
        borderWidth: 1.9,
        borderRadius: 50,
        padding: 10,
        // fontWeight: "bold"
    },
    camera: {
        fontSize: 50,
        color: "black"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingTop: 10
    }
})