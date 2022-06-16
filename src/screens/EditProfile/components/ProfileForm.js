import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationEditText from './NavigationEditText'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'

const ProfileForm = ({ data }) => {
    return(
        <ScrollView style={styles.parent}>
            <Image style={styles.image} source={data.profilePic} />
            <TouchableOpacity
                activeOpacity={1}
                style={styles.textOpacity}
                onPress={()=> SheetManager.show("profilePic_actionSheet")}>
                <Text style={styles.text}>Change profile photo</Text>
            </TouchableOpacity>
            <NavigationEditText title="Name" value={data.accountName} />
            <NavigationEditText title="Username" value={data.username} />
            <NavigationEditText title="Bio" />

            <ActionSheet gestureEnabled={true} indicatorColor="grey" animated={true} id='profilePic_actionSheet'>
                <View style={styles.actionSheet_parent}>
                    <View style={styles.actionSheet_header}>
                        <Text style={styles.actionSheet_headerText}>Change profile photo</Text>
                        <View style={styles.actionSheet_divider}></View>
                    </View>
                    <TouchableOpacity style={styles.actionSheet_opacity}>
                        <Text style={styles.actionSheet_text}>New profile photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionSheet_opacity}>
                        <Text style={[styles.actionSheet_text, {
                            color: "#d63b20"
                        }]}>Remove profile photo</Text>
                    </TouchableOpacity>
                </View>
            </ActionSheet>
        </ScrollView>
    )
}

export default ProfileForm

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        alignSelf: "center",
        borderRadius: 100
    },
    textOpacity: {
        alignSelf: "center",
        marginTop: 20
    },
    text: {
        fontSize: 18,
        color: "#3493D9"
    },
    actionSheet_parent: {
        width: "100%",
        marginBottom: 30
    },
    actionSheet_headerText: {
        fontSize: 14,
        color: "black",
        fontWeight: "bold",
        marginBottom: 20,
        marginLeft: 20
    },
    actionSheet_text: {
        fontSize: 17,
        color: "black",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10
    },
    actionSheet_divider: {
        borderWidth: 0.3,
        borderColor: "#bfbdbd",
        width: "100%"
    },
    actionSheet_header: {
        marginTop: 10,
        width: "100%"
    },
    actionSheet_opacity: {
        width: "100%",
        justifyContent: "center"
    }
})