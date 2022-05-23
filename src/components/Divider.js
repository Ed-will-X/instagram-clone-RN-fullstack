import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
    return(
        <View style={styles.divider}></View>
    )
}

export default Divider

const styles = StyleSheet.create({
    divider: {
        borderWidth: 0.17,
        borderColor: "#bfbdbd"
    }
})