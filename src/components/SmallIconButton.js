import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionic from "react-native-vector-icons/Ionicons"

const SmallIconButton = () => {
    const [ toggled, setToggled ] = useState(false)
    return(
        <TouchableOpacity
            onPress={()=> setToggled(!toggled)}
            style={styles.opacity}
            activeOpacity={1}>
            <Ionic style={styles.icon} size={15} name={toggled ? "person-add" : "person-add-outline"} />
        </TouchableOpacity>
    )
}

export default SmallIconButton

const styles = StyleSheet.create({
    opacity: {
        borderColor: "#DEDEDE",
        borderWidth: 1,
        borderRadius: 5,
        width: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        color: "black"
    }
})