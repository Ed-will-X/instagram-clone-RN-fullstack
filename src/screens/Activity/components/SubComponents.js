import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export const YouMightKnow = ({ data }) => {
    const navigation = useNavigation()
    const [ follow, setFollow ] = useState(data.follow)
    return(
        <TouchableOpacity
            style={youMightKnowStyles.parentOpacity}
            activeOpacity={1}
            onPress={()=> navigation.navigate('OtherProfile', {
                data: data
            })}
            >
                    {/* profile image */}
                <Image style={youMightKnowStyles.profileImage} source={data.profileImage} />
                {/* text */}
                <Text style={youMightKnowStyles.text}><Text style={youMightKnowStyles.username}>{data.username}</Text> who you might know, is on instagram. <Text style={youMightKnowStyles.timestampString}>{data.timestampString}</Text></Text>
                {/* follow button */}
                <View>
                <TouchableOpacity
                onPress={()=> setFollow(!follow)}
                activeOpacity={1}
                style={[youMightKnowStyles.followOpacity, {
                    backgroundColor: follow ? null : "#3493D9",
                    width: follow ? 90 : 68,
                    borderWidth: follow ? 1 : 0,
                    borderColor: '#DEDEDE'
                }]}
                >
                    <Text style={{
                        color: follow ? "black" : "white",
                        fontWeight: follow ? "bold" : "light"
                    }}>
                        {follow ? 'following' : 'follow'}
                    </Text>
                </TouchableOpacity>
                </View>
        </TouchableOpacity>
    )
}

const youMightKnowStyles = StyleSheet.create({
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
    }
})