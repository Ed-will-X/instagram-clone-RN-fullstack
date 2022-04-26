import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import SingleReel from './SingleReel'
import { MockContext } from '../../../context/MockContext'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

const SwiperComponent = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const { videoData } = useContext(MockContext)

    const handleIndexChange = ({ index }) =>{
        setCurrentIndex(index)
    }
    return(
        <SwiperFlatList
            vertical={true}
            onChangeIndex={handleIndexChange}
            data={videoData}
            renderItem={({ item, index })=>(
                <SingleReel data={item} index={index} currentIndex={currentIndex} />
            )}
            keyExtractor={(item, index)=> index}
        />
    )
}

export default SwiperComponent

const styles = StyleSheet.create({})