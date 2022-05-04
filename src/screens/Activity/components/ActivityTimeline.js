import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { MockContext } from '../../../context/MockContext'
import ActivityTemplate from './ActivityTemplate'
import { formatActivityTimestamp } from '../../../utils/usefulAlgorithms'

const ActivityTimeline = () => {
    const { activityData } = useContext(MockContext)
    console.log(activityData)
    

    return(
        <View>
            <View>
                <Text style={styles.header}>New</Text>
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'm') < 60){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                <Text style={styles.header}>Today</Text>
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'h') < 24){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                <Text style={styles.header}>This Week</Text>
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'd') < 7){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                <Text style={styles.header}>This month</Text>
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'w') < 4){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                <Text style={styles.header}>ActivityTimeline</Text>
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'w') > 4){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
        </View>
    )
}

export default ActivityTimeline

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 17
    }
})