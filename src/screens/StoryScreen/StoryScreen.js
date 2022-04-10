import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const StoryScreen = ({ route, navigation }) => {
	const { data } = route.params
	
    const [ progress, setProgress ] = useState(new Animated.Value(0))
    console.log(progress)
    useEffect(() => {
        let timer = setTimeout(()=>{
            navigation.goBack()
        }, 5000)

        Animated.timing(progress, {
            toValue: 340,
            duration: 5000,
            useNativeDriver: false
        }).start()

        return () => {
            clearTimeout(timer)
        };
    }, []);


  return (
	<View style={styles.viewPort}>
		<StatusBar backgroundColor='black' barStyle='light-content' />

		{/* animated bar */}
		<View style={styles.animatedBar}>
			<Animated.View style={[styles.animatedBarProgress, { width: progress}]}></Animated.View>
	  	</View>

		{/* profile pic, profile name and back icon */}
		<View style={styles.topMenu}>
			<View style={styles.userProps}>
                {/* profile pic */}
                <View style={styles.profilePicView}>
                    <Image source={data.image} style={styles.profilePic} />
                </View>
                {/* profile name */}
                <Text style={styles.username}>{data.name}</Text>
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.closeContainer} onPress={()=> navigation.goBack()}>
                <Ionic name='close' style={styles.close} />
            </TouchableOpacity>
		</View>

        {/* image body */}
        <Image source={data.image} style={styles.image} />

        {/* textbar and send button */}
        <View style={styles.bottomBar}>
            <TextInput style={styles.sendMessage} placeholder="Send message" placeholderTextColor="white" />
            <TouchableOpacity activeOpacity={1}>
                <Feather name='navigation' style={styles.sendIcon} />
            </TouchableOpacity>
        </View>
	</View>
  )
}

export default StoryScreen

const styles = StyleSheet.create({
	viewPort: {
		backgroundColor: 'black',
		height: '100%',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
	animatedBar: {
		height: 3,
		width: '95%',
		backgroundColor: 'gray',
		borderWidth: 1,
		position: 'absolute',
		top: 18
	},
	animatedBarProgress: {
		height: '100%',
		backgroundColor: 'white',
	},
	topMenu: {
		padding: 15,
		flexDirection: 'row',
		position: 'absolute',
		top: 12,
		left: 0,
		width: '100%',
		alignItems: 'center',
        justifyContent: 'space-between'
	},
    userProps: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
	profilePicView: {
		borderRadius: 100,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	profilePic: {
		borderRadius: 100,
		resizeMode: 'cover',
		width: '92%',
		height: '92%'
	},
    username:{
        paddingLeft: 10,
        fontSize: 15,
        color: 'white'
    },
    closeContainer: {
        padding: 8
    },
    close:{
        color: 'white',
        fontSize: 20,
        opacity: 0.6,
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: 600
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
        width: '100%'
    },
    sendMessage: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 25,
        width: '80%',
        height: 50,
        paddingLeft: 20,
        color: 'white'
    },
    sendIcon: {
        fontSize: 25,
        color: 'white'
    }
})