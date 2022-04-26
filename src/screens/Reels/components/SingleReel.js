import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import Video from 'react-native-video'
import Ionic from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const SingleReel = ({ data, index, currentIndex }) => {
    const videoRef = useRef(null)
    const [ isMute, setIsMute ] = useState(false)
    const [ liked, setLiked ] = useState(data.isLike)

    const onBuffer = (buffer) => {
        // console.log('buffering: ', buffer)
    }

    const onError = (error) =>{
        console.log(error)
    }


    return(
        <View style={styles.window}>
            <TouchableOpacity
                style={styles.videoOpacity}
                onPress={()=> setIsMute(!isMute)}
                activeOpacity={1}
            >
                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    style={styles.video}
                    source={data.video}
                    repeat={true}
                    resizeMode='cover'
                    muted={isMute}
                    paused={currentIndex === index ? false : true}
                />
            </TouchableOpacity>


            {/* mute */}
            <Ionic
                name='volume-mute' 
                style={[styles.mute,
                    {fontSize: isMute ? 20 : 0, padding: isMute ? 20 : 0 }]}
            />


            {/* user props */}
            <View style={styles.bottomLeft}>
                <TouchableOpacity style={styles.userPropsOpacity}>
                    <View style={styles.userProps}>
                        <View style={styles.profilePicView}>
                            <Image source={data.profilePic} style={styles.profilePic} />
                        </View>
                        <Text style={styles.username}>{data.username}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.caption}>{data.caption}</Text>
                <View style={styles.audioView}>
                    <Ionic name='ios-musical-note' style={styles.musicalNote} />
                    <View style={styles.audioPropsView}>
                        <Text style={styles.audioCreator}>{data.audioCreator} </Text>
                        <Ionic name='alert-circle' style={styles.audioSeparator} />
                        <Text style={styles.audioName}> {data.audioName}</Text>
                    </View>
                </View>
            </View>


            {/* left column */}
            <View style={styles.leftColumnParentView}>
                <TouchableOpacity
                    style={styles.leftColumnChildOpacity}
                    onPress={()=> setLiked(!liked)}
                    activeOpacity={1}
                    >
                    <AntDesign name={liked ? 'heart' : 'hearto'} style={[styles.leftColumnChildIcon, { color: liked ? 'red' : 'white'}]} />
                    <Text style={styles.leftBottomIconText}>{data.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftColumnChildOpacity} activeOpacity={1}>
                    <Ionic name='ios-chatbubble-outline' style={styles.leftColumnChildIcon} />
                    <Text style={styles.leftBottomIconText}>{Math.floor(Math.random() * 1000)}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftColumnChildOpacity} activeOpacity={1}>
                    <Ionic name='paper-plane-outline' style={styles.leftColumnChildIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftColumnChildOpacity} activeOpacity={1}>
                    <Feather name='more-vertical' style={styles.leftColumnChildIcon} />
                </TouchableOpacity>
                <View style={styles.audioImageView}>
                    <Image source={data.audioImage} style={styles.audioImage} />
                </View>
            </View>
        </View>
    )
}

export default SingleReel

const styles = StyleSheet.create({
    window: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoOpacity: {
        width: '100%',
        height: '100%'
    },
    video: {
        width: '100%',
        height: '100%'
    },
    mute:{
        color: 'white',
        position: 'absolute',
        backgroundColor: 'rgba(52,52,52,0.6)',
        borderRadius: 100,
    },
    bottomLeft: {
        position: 'absolute',
        width: windowWidth,
        zIndex: 1,
        bottom: 50,
        padding: 10
    },
    userPropsOpacity: {
        width: 150
    },
    userProps: {
        width: 100,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePicView: {
        width: 32,
        height: 32,
        borderRadius: 100,
        backgroundColor: 'white',
        margin: 10
    },
    profilePic: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 100
    },
    username: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    caption: {
        color: 'white',
        fontSize: 14,
        marginHorizontal: 10
    },
    audioView: {
        flexDirection: 'row',
        padding: 10,
    },
    musicalNote: {
        color: 'white',
        fontSize: 16
    },
    audioPropsView: {
        flexDirection: 'row'
    },
    audioCreator: {
        color: 'white'
    },
    audioSeparator: {
        color: 'white',
        fontSize: 5,
        alignSelf: 'center'
    },
    audioName: {
        color: 'white'
    },
    leftColumnParentView: {
        position: 'absolute',
        bottom: 60,
        right: 0
    },
    leftColumnChildOpacity: {
        padding: 10
    },
    leftColumnChildIcon: {
        color: 'white',
        fontSize: 27
    },
    leftBottomIconText: {
        color: 'white',
        alignSelf: 'auto'
    },
    audioImageView: {
        width: 30,
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        margin: 10
    },
    audioImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    }
})