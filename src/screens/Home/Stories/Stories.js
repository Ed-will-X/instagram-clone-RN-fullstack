import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Story from './components/Story'
import { MockContext } from '../../../context/MockContext'
import { AuthContext } from '../../../context/AuthContext'

const Stories = () => {
    const { storyInfo, currentUser } = useContext(MockContext)
    const { getUserFromStorage } = useContext(AuthContext)
    const [ user, setUser ] = useState({})

    useEffect(async() => {
        const user = await getUserFromStorage()
        setUser(user)

    }, []);

  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollview}
    >
        <Story data={user} currentUser={true} />
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
        paddingTop: 20,
        paddingHorizontal: 10
    }
})