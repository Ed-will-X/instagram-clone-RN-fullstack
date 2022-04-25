import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import SingleReel from './SingleReel'
import { MockContext } from '../../../context/MockContext'

const SwiperComponent = () => {
    const { videoData } = useContext(MockContext)
    return(
        <View>
            <SingleReel data={videoData[0]} />
        </View>
    )
}

export default SwiperComponent

const styles = StyleSheet.create({})