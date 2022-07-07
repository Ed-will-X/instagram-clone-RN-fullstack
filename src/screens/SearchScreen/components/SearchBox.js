import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const SearchBox = ({ handleValidate }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.parentView}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=> navigation.goBack()}
            >
                <Ionic name='arrow-back' color="black" style={styles.backIcon} />
            </TouchableOpacity>
            <TextInput
                autoFocus={true}
                placeholder='Search'
                placeholderTextColor='#909090'
                style={styles.searchBar}
                onChangeText={handleValidate}
                autoCapitalize="none"
            />
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
        backgroundColor: 'white',
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 40
    },
    backIcon: {
        fontSize: 28,
        opacity: 0.7,
        color: 'black',
        zIndex: 1,
        paddingHorizontal: 10
    },
    searchBar: {
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 20,
        alignItems: 'flex-start',
        paddingVertical: 4,
        color: "black"
    }
})