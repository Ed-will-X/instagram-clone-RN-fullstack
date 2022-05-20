import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = ({ fontSize }) => {
  return (
    <Text style={[styles.logo, {
        fontSize: fontSize ? fontSize : 27
    }]}>Instagram</Text>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'Lobster-Regular',
        color: 'black',
        fontWeight: '500'
    }
})