import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FollowButton from '../../../components/FollowButton'
import Button from "../../../components/Button"
import SmallIconButton from "../../../components/SmallIconButton"

const ButtonsRow = () => {
    return (
        <View style={styles.parent}>
            <FollowButton />
            <Button text="Message" />
            <SmallIconButton />
        </View>
    )
}

export default ButtonsRow

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 5,
        marginVertical: 10
    }
})