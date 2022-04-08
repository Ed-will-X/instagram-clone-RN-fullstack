import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <Text style={styles.logo}>Instagram</Text>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        fontFamily: 'Lobster-Regular',
        fontSize: 27,
        color: 'black',
        fontWeight: '500'
    }
})