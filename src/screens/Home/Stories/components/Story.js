import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'

const Story = ({ data, index }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate('StoryScreen', {
            data: data
        })}
        key={index}
        activeOpacity={1}
    >
        <View style={styles.story}>
            {/* unviewed circle thingy and images */}
            <View style={styles.circle}>
                <Image 
                    source={data.image}
                    style={styles.image}
                />
            </View>
            {/* username */}
            <Text>{data.name}</Text>
            {
                data.id === 1 ? (
                    <View style={styles.addStoryIcon}>
                        <Entypo name="circle-with-plus" style={styles.entypoIcon} />
                    </View>
                ) : null
            }
        </View>

    </TouchableOpacity>
  )
}

export default Story

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: '92%',
        height: '92%',
        borderRadius: 100,
        // backgroundColor: 'orange'
    },
    story: {
        flexDirection: 'column',
        paddingHorizontal: 8,
        position: 'relative'
    },
    circle: {
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderColor: '#C13584',
        borderWidth: 1.8,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addStoryIcon: {
        position: 'absolute',
        bottom: 20,
        right: 10,
        zIndex: 1
    },
    entypoIcon:{
        fontSize: 20,
        color: '#405de6',
        borderRadius: 100,
        backgroundColor: 'white'
    }
})