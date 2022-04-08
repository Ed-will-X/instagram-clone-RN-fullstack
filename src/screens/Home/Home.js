import { View, StyleSheet } from 'react-native'
import React from 'react'
import Header from './components/Header'

const Home = () => {
    return (
        <View style={styles.viewport}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    viewport: {
        backgroundColor: 'white',
        height: '100%'
    }
})

export default Home