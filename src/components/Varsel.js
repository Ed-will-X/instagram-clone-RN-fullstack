import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Varsel = ({ fontSize, fontWeight, color }) => {
    return (
        <Text style={[styles.logo, {
            fontSize: fontSize,
            fontWeight: fontWeight,
            color: color
        }]}>Varsel</Text>
    )
}

export default Varsel

const styles = StyleSheet.create({
    logo: {
        fontFamily: "GreatVibes-Regular"
    }
})