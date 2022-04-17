import { StyleSheet, View, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import SearchBox from './components/SearchBox'
import SearchContent from './components/SearchContent'
import FetchMore from './components/FetchMore'
import Popover from './components/Popover'

const Search = () => {
    const [ imageData, setImageData ] = useState(null)

    const getData = (data) => {
        setImageData(data)
    }
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <SearchBox />
                <SearchContent getData={getData} />
                <FetchMore />
            </ScrollView>
            {imageData ? (
                <Popover imageData={imageData} />
            ) : null}
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    parent: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative'
    }
})