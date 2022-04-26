import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import { truncate } from '../../../../utils/usefulAlgorithms'


const Post = ({ data }) => {
    const [ like, setLike ] = useState(data.isLiked)
    const [ isTruncate, setIsTruncate ] = useState(true)
    const truncationCut = 50

    return (
        <View style={styles.post}>
            {/* profile pic, username and menu */}
            <View style={styles.topBar}> 
                <View style={styles.userProps}>
                    <Image source={data.profilePic} style={styles.profilePic} />
                    <Text style={styles.username}>{data.username}</Text>
                </View>
                <Feather name='more-vertical' style={styles.more} />
            </View>
            <View style={styles.postImageView}>
                <Image source={data.postImage} style={styles.postImage} />
            </View>
            <View style={styles.userInteractions}>
                <View style={styles.LCS}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{
                        setLike(!like)
                    }}>
                        <AntDesign
                            name={like ? 'heart' : 'hearto'}
                            style={[ styles.like, { color: like ? 'red' : 'black' } ]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}>
                        <Ionic name='ios-chatbubble-outline' style={styles.comment} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}>
                        <Feather name='navigation' style={styles.share} />
                    </TouchableOpacity>
                </View>
                <Feather name='bookmark' style={styles.save} />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.likeCount}>{like ? data.likes + 1 : data.likes} likes</Text>
                    <TouchableOpacity 
                        activeOpacity={1}
                        onPress={()=>{
                            setIsTruncate(false)
                        }}>
                        {
                            data.caption ? 
                            <Text style={styles.caption}>
                                <Text style={styles.captionUsername}>{data.username}</Text>
                                {' '}{isTruncate === true ? 
                                        <Text>
                                            {truncate(data.caption, truncationCut)}
                                            <Text style={styles.readMore}>{data.caption.length > 50 ? "...read more" : null}</Text>
                                        </Text> 
                                        : data.caption}
                            </Text> : null
                        }
                    </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Text style={styles.commentsLink}>View all {Math.floor(Math.random() * 1000)} comments</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    post: {
        paddingBottom: 10,
        borderColor: 'grey',
        borderBottomWidth: 0.1
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    userProps: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
    username: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    more: {
        fontSize: 20,
        color: 'black'
    },
    postImageView: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postImage: {
        width: '100%',
        height: 400
    },
    userInteractions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15
    },
    LCS: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    like: {
        fontSize: 25,
        paddingLeft: 10
    },
    comment: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 10
    },
    share: {
        color: 'black',
        fontSize: 25,
        paddingLeft: 10
    },
    save: {
        color: 'black',
        fontSize: 25
    },
    bottom: {
        paddingHorizontal: 15
    },
    likeCount: {
        color: 'black'
    },
    caption: {
        color: 'black',
    },

    captionUsername: {
        fontWeight: 'bold',
        color: 'black'
    },
    commentsLink: {
        color: 'black',
        paddingVertical: 2,
        opacity: 0.4
    },
    readMore: {
        color: 'grey',
    }
})