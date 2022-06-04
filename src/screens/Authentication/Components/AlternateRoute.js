import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AlternateRoute = ({ text, action, onPress, textColor }) => {
    return(
        <View style={styles.parentView}>
            <Text style={[styles.text, {
                color: textColor ? textColor : "black"
            }]}>{text}</Text>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.actionOpacity}
                onPress={onPress}
                >
                <Text style={styles.action}> {action}.</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlternateRoute

const styles = StyleSheet.create({
    parentView: {
        flexDirection: "row"
    },
    text: {
        fontSize: 12
    },
    action: {
        fontSize: 12,
        color: "#385185",
        fontWeight: "bold"
    }
})