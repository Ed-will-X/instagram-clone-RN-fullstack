import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import Logo from '../../../components/Logo'
import TextField from '../Components/TextField'
import AlternateRoute from '../Components/AlternateRoute'
import Divider from '../../../components/Divider'
import { WINDOW_HEIGHT } from '../../../constants/values'
import FilledButton from '../Components/FilledButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [ keyboardVisible, setKeyboardVisible ] = useState(false)
    const navigation = useNavigation()


    useEffect(()=>{
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", ()=>{
            setKeyboardVisible(true)
        })

        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", ()=>{
            setKeyboardVisible(false)
        })

        return ()=>{
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    })
    return(
        <View style={styles.viewPort}>
            <View style={[styles.inputs, {
                marginTop: keyboardVisible ? WINDOW_HEIGHT / 7.0 : WINDOW_HEIGHT / 3.7,
            }]}>
                <Logo fontSize={37} />
                <TextField placeholder="Phone number, email or username" />
                <TextField placeholder="Password" isPassword={true} />
                
                <FilledButton
                    text="Log in"
                    isValid={true}
                    onPress={()=> navigation.navigate("SignedInStack")} />
                <AlternateRoute text="Forgot your login details?" action="Get help logging in" />
            </View>
            <View
                style={styles.bottom}
                >
                <Divider />
                <View style={styles.bottomRoute}>
                    <AlternateRoute text="Don't have an account?" action="Sign up" />
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white",
        flex: 1,
    },
    inputs: {
        alignItems: 'center',
        justifyContent: "space-between",
        height: WINDOW_HEIGHT / 2.7
    },
    bottom: {
        position: "absolute",
        bottom: WINDOW_HEIGHT / 40,
        width: "100%",
    },
    bottomRoute: {
        alignSelf: "center",
        marginTop: WINDOW_HEIGHT / 100,
    }
})