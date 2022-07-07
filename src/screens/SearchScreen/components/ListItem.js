import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Story from '../../Home/Stories/components/Story'
import { useNavigation } from '@react-navigation/native'

const ListItem = ({ user }) => {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            style={styles.parent}
            activeOpacity={1}
            onPress={()=> navigation.navigate("OtherProfile",{
                data: user
            })}
            >
            <Story width={60} height={60} isProfilePic={false} data={user} />
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
        paddingTop: 10,
        marginLeft: 7
    },
    parent: {
        flexDirection: "row",
        // alignItems: "center",
        paddingLeft: 10
    },
    username: {
        fontWeight: "bold",
        color: "black",
        fontSize: 14
    },
    fullname: {
        color: "grey"
    }
})