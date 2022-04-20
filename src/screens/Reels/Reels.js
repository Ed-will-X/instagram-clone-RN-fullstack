import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { useFocusEffect, use } from '@react-navigation/native';
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import SwiperComponent from './components/SwiperComponent';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Reels = () => {

    useFocusEffect(()=>{
        StatusBar.setBackgroundColor('black')
        StatusBar.setBarStyle('light-content')

        return ()=>{
            StatusBar.setBackgroundColor('white')
            StatusBar.setBarStyle('dark-content')
        }
    })
    return (
        <View style={styles.screen}>
            <View style={styles.topBar}>
                <Text style={styles.reelsText}>Reels</Text>
                <Feather name='camera' style={styles.icon} />
            </View>
            <SwiperComponent />
        </View>
    )
}

export default Reels

const styles = StyleSheet.create({
    screen: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black'
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        padding: 10
    },
    reelsText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    icon: {
        fontSize: 25,
        color: 'white'
    }
})