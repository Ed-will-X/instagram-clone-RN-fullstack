import { StyleSheet, Text, View, Keyboard } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import TextField from '../Components/TextField'
import { parseEmail, parseFullname, parseUsername } from '../../../utils/usefulAlgorithms'
import { WINDOW_HEIGHT } from '../../../constants/values'
import FilledButton from '../Components/FilledButton'
import Divider from '../../../components/Divider'
import AlternateRoute from '../Components/AlternateRoute'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../../components/Logo'
import { handlePasswordValidate } from '../../../utils/auth'
import { AuthContext } from '../../../context/AuthContext'

const Signup = () => {
    const [ keyboardVisible, setKeyboardVisible ] = useState(false)
    const [ email, setEmail ]  = useState("")
    const [ password, setPassword ]  = useState("")
    const [ username, setUsername ]  = useState("")
    const [ name, setName ]  = useState("")
    const [ isValidEmail, setIsValidEmail ] = useState(false)
    const [ isValidUsername, setIsValidUsername ] = useState(false)
    const [ isValidName, setIsValidName ] = useState(false)
    const [ isValidPassword, setIsValidPassword ] = useState(false)

    const { signUp } = useContext(AuthContext)

    const navigation = useNavigation()
    
    const handleValidate = () => {
        var isValid = false

        if(isValidEmail && isValidPassword && isValidUsername && isValidName){
            isValid = true
        }

        return isValid
    }

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
                {/* <Logo fontSize={37} /> */}
                <TextField
                    placeholder="Email"
                    handleValidate={(value)=>{
                        const isValid = parseEmail(value)
                        setEmail(value)
                        setIsValidEmail(isValid)
                    }}
                    />
                <TextField
                    placeholder="Full name"
                    handleValidate={(value)=>{
                        const isValid = parseFullname(value)
                        setName(value)
                        setIsValidName(isValid)
                    }}
                    />
                <TextField
                    placeholder="Username"
                    handleValidate={(value)=>{
                        const isValid = parseUsername(value)
                        setUsername(value)
                        setIsValidUsername(isValid)
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
                    text="Sign up"
                    isValid={handleValidate() ? true : false}
                    onPress={async()=> {
                        try {
                            let response = await signUp({
                                email: email,
                                password: password,
                                username: username,
                                name: name
                            })

                            if(response.token){
                                navigation.navigate("SignedInStack")
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }} />
            </View>
            <View style={styles.bottom}>
                <Divider />
                <View style={styles.bottomRoute}>
                    <AlternateRoute
                        text="Already have an account?"
                        textColor="black"
                        action="Log in"
                        onPress={()=> navigation.navigate("Login")}
                    />
                </View>
            </View>
        </View>
    )
}

export default Signup

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