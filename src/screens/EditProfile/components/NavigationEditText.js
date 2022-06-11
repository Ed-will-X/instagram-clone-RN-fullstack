import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WINDOW_WIDTH } from '../../../constants/values'

const NavigationEditText = ({ title, value }) => {
    return(
        <TouchableOpacity activeOpacity={1} style={styles.opacity}>
            <Text style={[styles.title, {
                position: value ? "relative" : "absolute"
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
        marginTop: WINDOW_WIDTH / 22
    },
    value: {
        marginVertical: WINDOW_WIDTH / 70,
        color: "black",
        fontSize: 16
    }
})