import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../../components/Logo'
import FilledButton from '../Components/FilledButton'
import OutlineButton from '../Components/OutlineButton'
import { WINDOW_HEIGHT } from '../../../constants/values'
import { useNavigation } from '@react-navigation/native'

const IntialPage = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.viewPort}>
            <View style={styles.buttons}>
                <View style={styles.logoView}>
                    <Logo fontSize={40} />
                </View>
                <FilledButton
                    text="Create new account"
                    isValid={true}
                    onPress={()=> navigation.navigate("Signup")}
                    />
                <OutlineButton
                    text="Log in"
                    onPress={()=> navigation.navigate("Login")}
                    />
            </View>
        </View>
    )
}

export default IntialPage

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        backgroundColor: "white"
    },
    logoView: {
        marginVertical: WINDOW_HEIGHT / 19.6
    },
    buttons: {
        alignItems: "center",
        marginTop: 240
    }
})