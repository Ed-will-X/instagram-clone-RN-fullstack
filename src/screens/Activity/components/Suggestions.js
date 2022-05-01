import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Suggestions = ({ data, navigation }) => {
    return(
        <View style={styles.viewport}>
            <Text style={styles.header}>Suggestions for you</Text>
            {data.slice(0, 6).map((item, index)=>{
                const [ follow, setFollow ] = useState(item.follow)
                const [ close, setClose ] = useState(false)
                return(
                    <View key={index}>
                        {close ? null : (
                            <TouchableOpacity
                                style={styles.parentOpacity}
                                activeOpacity={1}
                                onPress={()=> navigation.navigate('OtherProfile', {
                                    data: item
                                })}
                                >
                                <View style={styles.userPropsView}>
                                    <Image style={styles.profileImage} source={item.profileImage} />
                                    <View>
                                        <Text style={styles.username}>{item.username}</Text>
                                        <Text style={styles.accountName}>{item.accountName}</Text>
                                        <Text style={styles.suggestedText}>Suggested for you</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.rightRow}>
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
                                        <Text style={[styles.followText,{
                                            color: follow ? "black" : "white",
                                            fontWeight: follow ? "bold" : "normal"
                                        }]}>
                                            {follow ? 'following' : 'follow'}
                                        </Text>
                                    </TouchableOpacity>
                                    {follow ? null : (
                                        <TouchableOpacity
                                            style={styles.closeOpacity}
                                            activeOpacity={1}
                                            onPress={()=> setClose(true)}
                                        >
                                            <AntDesign name='close' style={styles.close} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                )
            })}
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    viewport: {

    },
    header: {
        fontWeight: 'bold',
        paddingVertical: 10,
        color: 'black'
    },
    parentOpacity: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10
    },
    userPropsView: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '64%'
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        marginRight: 10
    },
    username:{
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold'
    },
    accountName: {
        color: 'black',
        opacity: 0.5,
        fontSize: 12
    },
    suggestedText: {
        color: 'black',
        opacity: 0.5,
        fontSize: 12
    },
    rightRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    followOpacity: {
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    followText: {
        
    },
    closeOpacity: {
        padding: 10,
    },
    close: {
        fontSize: 14,
        color: 'black',
        opacity: 0.8
    }
})