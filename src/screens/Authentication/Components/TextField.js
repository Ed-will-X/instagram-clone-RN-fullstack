import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { WINDOW_WIDTH } from '../../../constants/values'
import Ionic from "react-native-vector-icons/Ionicons"


const TextField = ({ placeholder, isPassword, handleValidate, textColor }) => {
    const [ show, setShow ] = useState(false)

    return (
        <View style={styles.inputView}>
            <TextInput
                style={[styles.input, {
                    width: isPassword ? "80%" : "100%",
                    color: textColor ? textColor : "black"
                }]}
                autoCapitalize="none"
                placeholder={placeholder}
                textContentType={isPassword ? "password" : "none"}
                secureTextEntry={isPassword && show ? true : false}
                autoFocus={false}
                placeholderTextColor="#948f8f"
                onChangeText={handleValidate}
                />
            {isPassword ? <TouchableOpacity
                onPress={()=> setShow(!show)}
                style={styles.iconOpacity}
            >
                <Ionic style={styles.icon} name={show ? "eye-off-outline" : "eye-outline"} size={20} />
            </TouchableOpacity> : null}
        </View>
    )
}

export default TextField

const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#ccc",
        width: WINDOW_WIDTH / 1.2,
        alignItems: "center",
        // justifyContent: "space-between",
    },
    input: {
        height: "100%",
        paddingLeft: WINDOW_WIDTH / 20,
    },
    icon: {
        color: "gray",
    },
    iconOpacity: {
        padding: WINDOW_WIDTH / 30,
    }
})