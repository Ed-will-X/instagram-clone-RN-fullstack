import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { MockContext } from '../../../context/MockContext'
import AllSmall from './AllSmall'
import Right2X from './Right2X'
import Left2X from './Left2X'
import Left4X from './Left4X'
import Right4X from './Right4X'

const SearchContent = ({ getData }) => {
    const { searchData } = useContext(MockContext)
    return (
        <View>
            {searchData.map((data, index)=>{
                return (
                    <View key={index}>
                        {/* first type */}
                        {data.id === 0 ? (
                            <AllSmall getData={getData} data={data} />
                        ) : null}

                        {/* second type */}
                        {data.id === 1 ? (
                            <Left2X getData={getData} data={data} />
                        ) : null}
                        
                        {data.id === 2 ? (
                            <Right4X getData={getData} data={data} />
                        ) : null}
                    </View>
                )
            })}
            {searchData.map((data, index)=>{
                return (
                    <View key={index}>
                        {/* first type */}
                        {data.id === 0 ? (
                            <AllSmall getData={getData} data={data} />
                        ) : null}

                        {/* second type */}
                        {data.id === 1 ? (
                            <Right2X getData={getData} data={data} />
                        ) : null}
                        
                        {data.id === 2 ? (
                            <Left4X getData={getData} data={data} />
                        ) : null}
                    </View>
                )
            })}
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({

})