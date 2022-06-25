import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import NavigationEditText from './NavigationEditText'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { launchImageLibrary } from 'react-native-image-picker'
import defaultPfp from "../../../../assets/images/empty-pfp.png"
import { UserContext } from '../../../context/UserContext'

const LocalImageUri = Image.resolveAssetSource(defaultPfp).uri;

const ProfileForm = ({ data }) => {
    const [ user, setUser ] = useState(data)

    const { uploadProfilePic, deleteProfilePic } = useContext(UserContext)
    
    const selectImage = async() => {
        try {
            const gallery = await launchImageLibrary({
                mediaType: "photo",
                maxWidth: 480,
                maxHeight: 480,
                includeBase64: true
            })
            const response = await uploadProfilePic(gallery.assets[0])
            setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteImage = async() => {
        try {
            const response = await deleteProfilePic()
            setUser(response.data.user)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ScrollView style={styles.parent}>
            <Image style={styles.image} source={{
                uri: user.profilePic ? 'data:image/jpeg;base64,' + user.profilePic : LocalImageUri
            }} />
            <TouchableOpacity
                activeOpacity={1}
                style={styles.textOpacity}
                onPress={()=> SheetManager.show("profilePic_actionSheet")}>
                <Text style={styles.text}>Change profile photo</Text>
            </TouchableOpacity>
            <NavigationEditText serverKey="fullname" title="Name" value={user.fullname} />
            <NavigationEditText serverKey="username" title="Username" value={user.username} />
            <NavigationEditText serverKey="email" title="email" value={user.email} />
            <NavigationEditText serverKey="bio" title="Bio" value={user.bio} />

            <ActionSheet gestureEnabled={true} indicatorColor="grey" animated={true} id='profilePic_actionSheet'>
                <View style={styles.actionSheet_parent}>
                    <View style={styles.actionSheet_header}>
                        <Text style={styles.actionSheet_headerText}>Change profile photo</Text>
                        <View style={styles.actionSheet_divider}></View>
                    </View>
                    <TouchableOpacity
                        style={styles.actionSheet_opacity}
                        onPress={()=>{
                            selectImage()
                        }}>
                        <Text style={styles.actionSheet_text}>New profile photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionSheet_opacity}
                        onPress={()=>{
                            deleteImage()
                        }}>
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