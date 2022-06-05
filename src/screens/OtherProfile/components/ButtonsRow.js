import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FollowButton from '../../../components/FollowButton'
import Button from "../../../components/Button"
import SmallIconButton from "../../../components/SmallIconButton"

const ButtonsRow = () => {
    return (
        <View style={styles.parent}>
            <FollowButton />
            <Button />
            <SmallIconButton />
        </View>
    )
}

export default ButtonsRow

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row"
    }
})