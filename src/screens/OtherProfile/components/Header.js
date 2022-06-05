import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { WINDOW_WIDTH } from '../../../constants/values'

const Header = ({ navigation, username }) => {
    return(
        <View style={styles.parent}>
            <TouchableOpacity
                style={styles.backOpacity}
                onPress={()=> navigation.goBack()}
            >
                <Ionic style={styles.backIcon} color="black" size={WINDOW_WIDTH / 15} name="arrow-back" />
            </TouchableOpacity>
            <View style={styles.spacedView}>
                <Text style={styles.username}>{username}</Text>
                <TouchableOpacity style={styles.moreOpacity}>
                    <Feather size={WINDOW_WIDTH / 17} color="black" name="more-vertical" style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        alignItems: "center",
        padding: WINDOW_WIDTH / 36,
        backgroundColor: "white"
    },
    backOpacity: {
        padding: WINDOW_WIDTH / 100
    },
    backIcon: {

    },
    moreOpacity: {
        padding: WINDOW_WIDTH / 100,
        marginRight: WINDOW_WIDTH / 30
    },
    moreIcon: {

    },
    username: {
        color: "black",
        fontWeight: "bold",
        fontSize: WINDOW_WIDTH / 18,
        marginLeft: WINDOW_WIDTH / 22
    },
    spacedView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "92%",
        paddingHorizontal: 360 / WINDOW_WIDTH
    }
})