import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

const Header = ({ username }) => {
    return(
        <View style={styles.parent}>
            <Text style={styles.username}>{username}</Text>
            <View style={styles.iconsView}>
                <FontAwesome style={styles.icon} name='plus-square-o' />
                <TouchableOpacity activeOpacity={1} onPress={()=> SheetManager.show("profile-hamburger")}>
                    <Ionic style={[styles.icon, {
                        fontSize: 35
                    }]} name="menu" />
                </TouchableOpacity>
            </View>

            <ActionSheet gestureEnabled={true} indicatorColor="grey" animated={true} id='profile-hamburger'>
                <View style={styles.actionSheet_parent}>
                    <TouchableOpacity style={styles.actionSheet_view}>
                        <Ionic name="settings-sharp" style={styles.actionSheet_icon} />
                        <Text style={styles.actionSheet_text}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionSheet_view}>
                        <Feather name="bookmark" style={styles.actionSheet_icon} />
                        <Text style={styles.actionSheet_text}>Saved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionSheet_view}>
                        <Ionic name="person-add-outline" style={styles.actionSheet_icon} />
                        <Text style={styles.actionSheet_text}>Discover People</Text>
                    </TouchableOpacity>
                </View>
            </ActionSheet>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    parent: {
        backgroundColor: "white",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop: 10
    },
    username: {
        fontSize: 23,
        color: "black",
        fontWeight: "bold"
    },
    iconsView: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        fontSize: 30,
        color: "black",
        marginHorizontal: 7
    },
    actionSheet_view: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    actionSheet_text: {
        marginHorizontal: 20,
        color: "black",
        fontSize: 17
    },
    actionSheet_icon: {
        fontSize: 20,
        color: "black",
    },
    actionSheet_parent: {
        marginHorizontal: 10,
        marginVertical: 15
    }
})