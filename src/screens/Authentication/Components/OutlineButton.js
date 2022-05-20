import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/values'

const OutlineButton = ({ text, onPress }) => {
    return(
        <TouchableOpacity
            style={styles.opacity}
            activeOpacity={0.5}
            onPress={onPress}
            >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default OutlineButton

const styles = StyleSheet.create({
    text: {
        color: "#3897f1",
        fontWeight: "bold"
    },
    opacity: {
        marginVertical: WINDOW_HEIGHT / 30,
        alignItems: "center",
        justifyContent: "center",
        height: WINDOW_HEIGHT / 19,
        width: WINDOW_WIDTH / 1.25
    }
})