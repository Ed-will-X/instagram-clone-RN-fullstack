import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'
import ListItem from './components/ListItem'
import { UsersContext } from '../../context/UsersContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SearchScreen = () => {
    const { searchUsers } = useContext(UsersContext)
    const [ users, setUsers ] = useState([])
    const [ token, setToken ] = useState(null)

    useEffect(() => {
        const i = async() => {
            try {
                const token = await AsyncStorage.getItem("token")
                setToken(token)
            } catch (error) {
                console.log(error)
            }
        }
        i()
    }, []);

    const renderItem = ({ item, index}) => {
        return (
            <ListItem user={item} />
        )
    }
    return (
        <View style={styles.viewPort}>
            <SearchBox
                handleValidate={async(value)=> {
                    const users = await searchUsers({ term: value, token: token })
                    setUsers(users)
                }}
            />
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        backgroundColor: "white"
    }
})