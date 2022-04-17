import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FetchMore = () => {
    return (
        <TouchableOpacity style={styles.view}>
            <AntDesign name='pluscircleo' style={styles.icon} />
        </TouchableOpacity>
    )
}

export default FetchMore

const styles = StyleSheet.create({
    view: {
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'black',
        fontSize: 40,
        opacity: 0.5
    }
})