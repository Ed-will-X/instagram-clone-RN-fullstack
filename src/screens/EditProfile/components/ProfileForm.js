import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NavigationEditText from './NavigationEditText'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

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

            <ActionSheet gestureEnabled={true} animated={true} indicatorColor="grey" id="profilePic_actionSheet">
                <View styles={styles.actionSheet_parent}>
                    <View style={styles.actionSheet_header}>
                        <Text styles={styles.actionSheet_headerText}>Change profile photo</Text>
                        <View style={styles.actionSheet_divider}></View>
                    </View>
                    <Text style={styles.actionSheet_text}>New profile photo</Text>
                    <Text style={styles.actionSheet_text}>Remove profile photo</Text>
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
        marginVertical: 20,
        backgroundColor: "red"
    },
    actionSheet_headerText: {
        fontSize: 20,
        color: "red"
    },
    actionSheet_text: {
        fontSize: 17
    },
    actionSheet_divider: {
        borderWidth: 0.3,
        borderColor: "#bfbdbd"
    }
})