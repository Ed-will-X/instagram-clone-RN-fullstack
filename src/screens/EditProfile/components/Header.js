import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const Header = ({ headerName, onPressCheck }) => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    const combineFunction = () => {
        onPressCheck()
        goBack()
    }

    return(
        <View style={styles.parent}>
            <View style={styles.leftView}>
                <TouchableOpacity activeOpacity={1} style={styles.opacity} onPress={goBack}>
                    <Ionic name='close' style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.text}>{headerName}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.opacity}
                onPress={onPressCheck ? combineFunction : goBack}
                >
                <Ionic name='checkmark' style={[styles.icon, {
                    color:"#3493D9"
                }]} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginVertical: 10,
        alignItems: "center",
        backgroundColor: "white"
    },
    leftView: {
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20
    },
    icon: {
        fontSize: 30,
        color: "black"
    }
})