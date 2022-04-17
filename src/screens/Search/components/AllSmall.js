import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AllSmall = ({ data, getData }) => {
  return (
    <View style={styles.smallParentView}>
        {data.images.map((imgData, imgIndex)=>{
            return(
                <TouchableOpacity
                    onLongPress={()=> getData({
                        image: imgData,
                        profilePic: imgData,
                        username: 'placeholder_user'
                    })}
                    onPressOut={()=> getData(null)}
                    key={imgIndex}
                    activeOpacity={1}
                    style={styles.smallOpacity}
                >
                    <Image source={imgData} style={styles.smallImg} />
                </TouchableOpacity>
            )
        })}
    </View>
  )
}

export default AllSmall

const styles = StyleSheet.create({
    smallParentView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    smallOpacity: {
        width: '33%',
        paddingBottom: 2
    },
    smallImg: {
        width: '100%',
        height: 150
    }
})