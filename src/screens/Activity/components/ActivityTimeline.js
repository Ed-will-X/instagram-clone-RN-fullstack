import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { MockContext } from '../../../context/MockContext'
import ActivityTemplate from './ActivityTemplate'
import { formatActivityTimestamp } from '../../../utils/usefulAlgorithms'

const ActivityTimeline = () => {
    const { activityData } = useContext(MockContext)
    const [ visibility, setVisibility ] = useState({
        new: false,
        today: false,
        week: false,
        month: false,
        earlier: false
    })

    let visibleTimestamps = []
    function validateTimestamps(data){
        var props = []
        for(let i =0; i< data.length; i++){
            if(formatActivityTimestamp(data[i].timestampString, "m") < 60){
                props.push("new")
            }

            if(formatActivityTimestamp(data[i].timestampString, "h") < 24){
                props.push("today")
            }

            if(formatActivityTimestamp(data[i].timestampString, "d") < 7){
                props.push("week")
            }

            if(formatActivityTimestamp(data[i].timestampString, "w") < 4){
                props.push("month")
            }

            if(formatActivityTimestamp(data[i].timestampString, "w") > 4){
                props.push("earlier")
            }
        }

        return Array.from(new Set(props))
    }

    useEffect(() => {
        visibleTimestamps = validateTimestamps(activityData)
        console.log(visibleTimestamps)

        if(visibleTimestamps.indexOf("new") !== -1){
            setVisibility((prevState)=>({
                ...prevState,
                new: true
            }))
        }

        if(visibleTimestamps.indexOf("today") !== -1){
            setVisibility((prevState)=>({
                ...prevState,
                today: true
            }))
        }

        if(visibleTimestamps.indexOf("week") !== -1){
            setVisibility((prevState)=>({
                ...prevState,
                week: true
            }))
        }

        if(visibleTimestamps.indexOf("month") !== -1){
            setVisibility((prevState)=>({
                ...prevState,
                month: true
            }))
        }

        if(visibleTimestamps.indexOf("earlier") !== -1){
            setVisibility((prevState)=>({
                ...prevState,
                earlier: true
            }))
        }
    }, []);

    
    
    
    return(
        <View>
            <View>
                
                {visibility.new ? <Text style={styles.header}>New</Text> : null}
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'm') < 60){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                {visibility.today ? <Text style={styles.header}>Today</Text> : null}
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'h') < 24){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                {visibility.week ? <Text style={styles.header}>This Week</Text> : null}
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'd') < 7){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                {visibility.month ? <Text style={styles.header}>This Month</Text> : null}
                {activityData.map((item, index)=>{
                    if(formatActivityTimestamp(item.timestampString, 'w') < 4){
                        return(
                            <ActivityTemplate data={item} key={index} />
                        )
                    }
                })}
            </View>
            <View>
                {visibility.earlier ? <Text style={styles.header}>Earlier</Text> : null}
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