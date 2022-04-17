import { Image, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Popover = ({ imageData }) => {
  return (
    <View style={styles.background}>
        <StatusBar backgroundColor='#525252' barStyle='dark-content' />
        <View style={styles.popover}>
            <View style={styles.topBar}>
                <Image style={styles.profilePic} source={imageData.profilePic} />
                <Text style={styles.username}>{imageData.username}</Text>
            </View>
            <Image style={styles.image} source={imageData.image} />
            <View style={styles.icons}>
                <Ionic name='ios-heart-outline' style={styles.icon} />
                <Ionic name='ios-person-circle-outline' style={styles.icon} />
                <Feather name='navigation' style={styles.icon} />
                <Feather name='more-vertical' style={styles.icon} />
            </View>
        </View>
    </View>
  )
}

export default Popover

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52,52,52,0.8)',
    },
    popover: {
        position: 'absolute',
        top: windowHeight / 6,
        left: windowWidth / 18,
        backgroundColor: 'white',
        width: '90%',
        height: 465,
        borderRadius: 15,
        zIndex: 1,
        elevation: 50
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 100
    },
    username: {
        fontSize: 12,
        color: 'black',
        paddingLeft: 12,
        fontWeight: '600'
    },
    image: {
        width: '100%',
        height: '80%'
    },
    icons: {
        justifyContent: 'space-around',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    icon: {
        color: 'black',
        fontSize: 26
    }
})