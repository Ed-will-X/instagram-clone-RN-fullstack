import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionic from "react-native-vector-icons/Ionicons"

const Header = ({ username }) => {
    return(
        <View style={styles.parent}>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.iconsView}>
                <FontAwesome style={styles.icon} name='plus-square-o' />
                <Ionic style={[styles.icon, {
                    fontSize: 35
                }]} name="menu" />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    parent: {
        backgroundColor: "white",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop: 10
    },
    username: {
        fontSize: 23,
        color: "black",
        fontWeight: "bold"
    },
    iconsView: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 30,
        color: "black",
        marginHorizontal: 7
    }
})