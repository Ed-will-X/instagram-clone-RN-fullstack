import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../../constants/values'
import { useNavigation } from '@react-navigation/native'

const NavigationEditText = ({ title, value, serverKey }) => {
    const navigation = useNavigation()

    return(
        <TouchableOpacity
            onPress={()=> navigation.navigate("EditTextPage", {
                title: title,
                value: value,
                serverKey: serverKey
            })}
            activeOpacity={1}
            style={styles.opacity}>
            <Text style={[styles.title, {
                position: value ? "relative" : "absolute",
                bottom: value ? null : 13,
                fontSize: value ? null : 18
            }]}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
            <View style={styles.line}></View>
        </TouchableOpacity>
    )
}

export default NavigationEditText

const styles = StyleSheet.create({
    line: {
        borderWidth: 0.2,
        borderColor: "#aaaaaa"
    },
    opacity: {
        marginHorizontal: WINDOW_WIDTH / 30,
        marginTop: WINDOW_WIDTH / 17
    },
    value: {
        marginVertical: WINDOW_WIDTH / 70,
        color: "black",
        fontSize: 16
    },
    title: {
        color: "grey"
    }
})