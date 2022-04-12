import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Story from './components/Story'
import { MockContext } from '../../../context/MockContext'

const Stories = () => {
const { storyInfo } = useContext(MockContext)

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
    >
        {
            storyInfo.map((data, index)=>{
                return(
                    <Story data={data} key={index} />
                )
            })
        }
    </ScrollView>
  )
}

export default Stories

const styles = StyleSheet.create({
    scrollview: {
        paddingTop: 20
    }
})