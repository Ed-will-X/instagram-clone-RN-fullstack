import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'

const FollowButton = () => {
    const [ follow, setFollow ] = useState(false)
    return(
        <TouchableOpacity style={[styles.opacity, {
            backgroundColor: follow ? null : "#3493D9",
            width: follow ? 90 : 68,
            borderWidth: follow ? 1 : 0,
            borderColor: '#DEDEDE'
        }]}
        onPress={()=>{
            setFollow(!follow)
        }}
        >
            <Text style={[styles.text, {
                color: follow ? "black" : "white",
                fontWeight: follow ? "bold" : "normal"
            }]}>Follow</Text>
        </TouchableOpacity>
    )
}

export default FollowButton

const styles = StyleSheet.create({
    opacity: {
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {

    }
})