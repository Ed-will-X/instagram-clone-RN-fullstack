import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Right4X = ({ data, getData }) => {
    return(
        <View style={styles.parent}>
            <View style={styles.smallView}>
                {data.images.slice(1,3).map((imgData, imgIndex)=>{
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
                            style={styles.smallImage}
                            >
                            <Image source={imgData} style={styles.smallImage} />
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
                <Image
                    source={data.images[0]}
                    style={styles.largeImage}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Right4X

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    largeOpacity: {
        paddingLeft: 2,
        width: '67%'
    },
    largeImage: {
        height: 300,
        width: '100%'
    },
    smallView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '33%',
        justifyContent: 'space-between'
    },
    smallOpacity: {
        paddingBottom: 2,
        width: '100%'
    },
    smallImage: {
        width: '100%',
        height: 150
    }
})