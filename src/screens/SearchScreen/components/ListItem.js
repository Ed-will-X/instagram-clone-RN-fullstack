import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Story from '../../Home/Stories/components/Story'
import { useNavigation } from '@react-navigation/native'

const ListItem = ({ user }) => {
    const navigation = useNavigation()
    const [ pressed, setPressed ] = useState(false)

    return(
        <TouchableOpacity
            style={[styles.parent, {
                backgroundColor: pressed ? "#f5f2f2" : "white"
            }]}
            activeOpacity={1}
            onPress={()=> navigation.navigate("OtherProfile",{
                data: user
            })}
            onPressIn={()=>{
                setPressed(true)
            }}
            onPressOut={()=>{
                setPressed(false)
            }}
            >
            <View style={styles.story}>
                <Story width={60} height={60} isProfilePic={false} data={user} />
            </View>
            <View style={styles.userProps}>
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.fullname}>{user.fullname}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    userProps: {
        flexDirection: "column",
        // paddingTop: 10,
        marginLeft: 7,
    },
    parent: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        height: 80
    },
    username: {
        fontWeight: "bold",
        color: "black",
        fontSize: 14
    },
    fullname: {
        color: "grey"
    },
    story: {
        paddingTop: 20
    }
})