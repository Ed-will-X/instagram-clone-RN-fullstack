import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const SearchBox = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
        style={styles.parentView}
        activeOpacity={1}
        onPress={()=> navigation.navigate("SearchScreen")}
        >
      <Ionic name='search' color="black" style={styles.searchIcon} />
      <View style={styles.searchBar}>
        <Text style={styles.placeholder}>Search</Text>
      </View>
    </TouchableOpacity>
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
        paddingLeft: 40,
        alignItems: 'flex-start',
        paddingVertical: 7
    },
    placeholder: {
        color: "#909090",
        fontSize: 16
    }
})