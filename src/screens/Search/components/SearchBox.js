import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons";

const SearchBox = () => {
  return (
    <View style={styles.parentView}>
      <Ionic name='search' style={styles.searchIcon} />
      <TextInput placeholder='Search' placeholderTextColor='#909090' style={styles.searchBar} />
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    parentView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        backgroundColor: 'white'
    },
    searchIcon: {
        fontSize: 18,
        opacity: 0.7,
        color: 'black',
        position: 'absolute',
        left: 25,
        zIndex: 1
    },
    searchBar: {
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40
    }
})