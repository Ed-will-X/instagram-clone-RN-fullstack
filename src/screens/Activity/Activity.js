import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import Suggestions from './components/Suggestions'
import { MockContext } from '../../context/MockContext'
import Earlier from './components/Earlier'


const Activity = () => {
    const { friendsProfileData } = useContext(MockContext)
    const navigation = useNavigation()

    return(
        <View style={styles.viewport}>
            <Text style={styles.header}>Activity</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Earlier />
                <Suggestions data={friendsProfileData} navigation={navigation} />
            </ScrollView>
        </View>
    )
}

export default Activity

const styles = StyleSheet.create({
    viewport: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    header: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
    scrollView: {
        margin: 10
    }
})