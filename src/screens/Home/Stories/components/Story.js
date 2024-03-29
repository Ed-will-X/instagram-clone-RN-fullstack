import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import { WINDOW_WIDTH } from '../../../../constants/values'
// import { pfpUri } from '../../../../constants/icons'
import defaultPfp from "../../../../../assets/images/empty-pfp.png"

const LocalImageUri = Image.resolveAssetSource(defaultPfp).uri;

const Story = ({ data, currentUser, isProfilePic, width, height, styleParam }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate('StoryScreen', {
            data: data
        })}
        activeOpacity={1}
    >
        <View style={[styles.story, styleParam ? styleParam : {}]}>
            {/* unviewed circle thingy and images */}
            <View style={[styles.circle, {
                width: !isProfilePic ? width : WINDOW_WIDTH / 3.5,
                height: !isProfilePic ? height : WINDOW_WIDTH / 3.5
            }]}>
                <Image 
                    source={{
                        uri: data.profilePic ? 'data:image/jpeg;base64,' + data.profilePic : LocalImageUri
                    }}
                    style={styles.image}
                />
            </View>
            {/* username */}
            <Text style={[styles.username, {
                marginTop: !isProfilePic ? 5 : null
                
            }]}>{currentUser ? "Your story" : data.name}</Text>
            {
                currentUser ? (
                    <View style={styles.addStoryIcon}>
                        <Entypo name="circle-with-plus" style={styles.entypoIcon} />
                    </View>
                ) : null
            }
        </View>

    </TouchableOpacity>
  )
}

export default Story

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: '92%',
        height: '92%',
        borderRadius: WINDOW_WIDTH / 3.6,
    },
    story: {
        flexDirection: 'column',
        paddingHorizontal: WINDOW_WIDTH / 70,
        position: 'relative',
    },
    circle: {
        backgroundColor: 'white',
        borderColor: '#C13584',
        borderWidth: 1.8,
        borderRadius: WINDOW_WIDTH / 3.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addStoryIcon: {
        position: 'absolute',
        bottom: WINDOW_WIDTH /18,
        right: WINDOW_WIDTH / 36,
        zIndex: 1
    },
    entypoIcon:{
        fontSize: WINDOW_WIDTH / 18,
        color: '#405de6',
        borderRadius: 100,
        backgroundColor: 'white'
    },
    username: {
        color: 'black',
        fontSize: WINDOW_WIDTH / 30,
        alignSelf: 'center',
    }
})