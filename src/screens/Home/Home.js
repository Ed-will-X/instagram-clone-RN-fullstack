import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Header from './components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import Stories from './Stories/Stories'
import Posts from './Posts/Posts'

const Home = () => {
    
    return (
        <View style={styles.viewport}>
            <Header />
            <ScrollView>
                <Stories />
                <Posts />
            </ScrollView>
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