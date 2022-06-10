import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ text, onPress, width, height }) => {
    return(
        <TouchableOpacity
            style={[styles.opacity, {
                width: width ? width : 150,
                height: height
            }]}
            onPress={onPress}
            activeOpacity={1}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    opacity: {
        borderColor: "#DEDEDE",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        color: "black",
        fontWeight: "bold",
    }
})