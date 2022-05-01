import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MockContext } from '../../../context/MockContext'
import { YouMightKnow } from './SubComponents'
import { formatActivityTimestamp } from '../../../utils/usefulAlgorithms'

const Earlier = () => {
    const { youMightKnow } = useContext(MockContext)

    console.log(youMightKnow)
    return(
        <View>
            <Text style={styles.header}>Earlier</Text>
            {youMightKnow.map((item, index)=>{
                if(formatActivityTimestamp(item.timestampString) > 4){
                    return(
                        <YouMightKnow data={item} key={index} />
                    )
                }
            })}
        </View>
    )
}

export default Earlier

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 17
    }
})