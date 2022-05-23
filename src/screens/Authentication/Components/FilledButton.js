import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/values'

const FilledButton = ({ text, isValid, onPress }) => {
    return(
        <TouchableOpacity
            style={styles.opacity(isValid)}
            activeOpacity={isValid ? 0.5 : 1}
            onPress={onPress}
            disabled={isValid ? false : true}
            >
                <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default FilledButton

const styles = StyleSheet.create({
    opacity: (isValid)=>({
        backgroundColor: isValid ? "#3897f1" : "#9ACAF7",
        height: WINDOW_HEIGHT / 18,
        width: WINDOW_WIDTH / 1.2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: WINDOW_HEIGHT / 156
    }),
    text: {
        color: "white",
        fontWeight: "bold"
    }
})