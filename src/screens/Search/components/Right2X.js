import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Right2X = ({ data, getData }) => {
    return (
        <View style={styles.parent}>
            <View style={styles.parentSmall}>
                {data.images.slice(1,5).map((imgData, imgIndex)=>{
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
            <TouchableOpacity
                activeOpacity={1}
                style={styles.largeOpacity}
                onLongPress={()=> getData({
                    image: data.images[0],
                    profilePic: data.images[0],
                    username: 'placeholder_user'
                })}
                onPressOut={()=> getData(null)}>
                    <Image source={data.images[0]} style={styles.largeImg} />
            </TouchableOpacity>
        </View>
    )
}

export default Right2X

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    parentSmall: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '66.5%',
        justifyContent: 'space-between'
    },
    smallOpacity: {
        width: '49.5%',
        paddingBottom: 2
    },
    smallImg: {
        height: 150,
        width: '100%'
    },
    largeOpacity: {
        width: '33%',
        marginLeft: 2
    },
    largeImg: {
        width: '100%',
        height: 300
    }
})