import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MockContext } from '../../../context/MockContext'
import Post from './Post/Post'

const Posts = () => {
    const { postInfo } = useContext(MockContext)
    
  return (
    <View>
        {postInfo.map((data, index)=>{
            return(
                <Post data={data} key={index} />
            )
        })}
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})