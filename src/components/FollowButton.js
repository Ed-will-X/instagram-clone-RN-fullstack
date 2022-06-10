import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'

const FollowButton = () => {
    const [ follow, setFollow ] = useState(false)
    return(
        <TouchableOpacity activeOpacity={1} style={[styles.opacity, {
            backgroundColor: follow ? null : "#3493D9",
            borderWidth: follow ? 1 : 0,
            borderColor: '#DEDEDE'
        }]}
        onPress={()=>{
            setFollow(!follow)
        }}
        >
            <Text style={[styles.text, {
                color: follow ? "black" : "white",
            }]}>{follow ? "Following" : "Follow"}</Text>
        </TouchableOpacity>
    )
}

export default FollowButton

const styles = StyleSheet.create({
    opacity: {
        height: 33,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150
    },
    text: {
        fontWeight: "bold"
    }
})