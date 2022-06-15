import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import Logo from '../../../components/Logo'
import TextField from '../Components/TextField'
import AlternateRoute from '../Components/AlternateRoute'
import Divider from '../../../components/Divider'
import { WINDOW_HEIGHT } from '../../../constants/values'
import FilledButton from '../Components/FilledButton'
import { useNavigation } from '@react-navigation/native'
import { handlePasswordValidate, handleUserPropsValidate } from '../../../utils/auth'
import { AuthContext } from '../../../context/AuthContext'

const Login = () => {
    const [ keyboardVisible, setKeyboardVisible ] = useState(false)
    const [ userProp, setUserProp ] = useState("")
    const [ isValidUserProps, setValidUserProps ] = useState({
        isValid: false,
        type: ""
    })
    const [ password, setPassword ] = useState("")
    const [ isValidPassword, setIsValidPassword ] = useState(false)
    
    const navigation = useNavigation()
    const { signIn, getUserFromApi } = useContext(AuthContext)

    // makes the keyboard invisible on navigation push
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
    }, [])
    
    return(
        <View style={styles.viewPort}>
            <View style={[styles.inputs, {
                marginTop: keyboardVisible ? WINDOW_HEIGHT / 7.0 : WINDOW_HEIGHT / 3.7,
            }]}>
                <Logo fontSize={37} />
                <TextField
                    placeholder="Phone number, email or username"
                    handleValidate={(value)=>{
                        const { isValid, type } = handleUserPropsValidate(value)
                        setUserProp(value)
                        setValidUserProps(()=>({
                            isValid: isValid,
                            type: type
                        }))
                    }}
                    />
                <TextField
                    placeholder="Password"
                    isPassword={true}
                    handleValidate={(value)=>{
                        const isValid = handlePasswordValidate(value)
                        setPassword(value)
                        setIsValidPassword(isValid)
                    }}
                    />
                
                <FilledButton
                    text="Log in"
                    isValid={isValidUserProps.isValid && isValidPassword ? true : false}
                    onPress={async()=>{
                        try {
                            let response = await signIn({ 
                                userProp: userProp, 
                                type: isValidUserProps.type, 
                                password: password 
                            })

                            if(response.token){
                                navigation.navigate("SignedInStack")
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }} />
                <AlternateRoute text="Forgot your login details?" textColor="black" action="Get help logging in" />
            </View>
            <View
                style={styles.bottom}
                >
                <Divider />
                <View style={styles.bottomRoute}>
                    <AlternateRoute
                        text="Don't have an account?"
                        textColor="black"
                        action="Sign up"
                        onPress={()=> navigation.navigate("Signup")}
                    />
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