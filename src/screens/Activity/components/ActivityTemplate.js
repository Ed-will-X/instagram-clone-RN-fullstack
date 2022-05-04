import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ActivityTemplate = ({ data }) => {
    const types = [ 'suggestion', 'follow', 'commentLike', 'postLike']
    const navigation = useNavigation()
    const [ follow, setFollow ] = useState(data.follow)
    return(
        <TouchableOpacity
            style={styles.parentOpacity}
            activeOpacity={1}
            onPress={()=> navigation.navigate('OtherProfile', {
                data: data
            })}
            >
                    {/* profile image */}
                <Image style={styles.profileImage} source={data.profileImage} />
                {/* text */}
                {data.category === 'suggestion' ? <Text style={styles.text}><Text style={styles.username}>{data.username}</Text> who you might know, is on instagram. <Text style={styles.timestampString}>{data.timestampString}</Text></Text> : null}
                {data.category === 'follow' ? <Text style={styles.text}><Text style={styles.username}>{data.username}</Text> just started following you. <Text style={styles.timestampString}>{data.timestampString}</Text></Text> : null}
                {data.category === 'commentLike' ? <Text style={styles.text}><Text style={styles.username}>{data.username}</Text> liked your comment: {data.comment ? data.comment : null}. <Text style={styles.timestampString}>{data.timestampString}</Text></Text> : null}
                {data.category === 'postLike' ? <Text style={styles.text}><Text style={styles.username}>{data.username}</Text> liked your post. <Text style={styles.timestampString}>{data.timestampString}</Text></Text> : null}
                {/* follow button */}
                {data.category === 'suggestion' || data.category === "follow" ? (
                    <View>
                        <TouchableOpacity
                        onPress={()=> setFollow(!follow)}
                        activeOpacity={1}
                        style={[styles.followOpacity, {
                            backgroundColor: follow ? null : "#3493D9",
                            width: follow ? 90 : 68,
                            borderWidth: follow ? 1 : 0,
                            borderColor: '#DEDEDE'
                        }]}
                        >
                            <Text style={{
                                color: follow ? "black" : "white",
                                fontWeight: follow ? "bold" : "normal"
                            }}>
                                {follow ? 'following' : 'follow'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ): null}
                {data.category === 'commentLike' || data.category === 'postLike' ? (
                    <View style={styles.postImageView}>
                        <Image source={data.postImage} style={styles.postImage} />
                    </View>
                ): null}
        </TouchableOpacity>
    )
}

export default ActivityTemplate

const styles = StyleSheet.create({
    parentOpacity: {
        width: '70%',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        flexDirection: 'row',
    },
    // parentView: {
    //     maxWidth: '60%',
    //     flexDirection: 'row',
    // },
    text: {
        fontSize: 14,
        color: 'black',
        padding: 1,
        width: '80%'
    },
    username: {
        fontWeight: 'bold',
        color: 'black'
    },
    timestampString: {
        color: '#D3D3D3'
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 10
    },
    followOpacity: {
        borderRadius: 5,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 20,
        width: '100%',
        margin: 5
    },
    postImageView: {
        width: 45,
        height: 45,
        marginLeft: 30
    },
    postImage: {
        width: '100%',
        height: '100%'
    }
})