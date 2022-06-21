import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { logo } from "../constants/icons"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants/values"
import Varsel from '../components/Varsel'
import { AuthContext } from '../context/AuthContext'


const ResolveAuth = ({ navigation }) => {
    const { tryLocalSignIn } = useContext(AuthContext)

    useEffect(async() => {
        const token = await tryLocalSignIn()      // placeholder value
        if(token){
            navigation.navigate("SignedInStack")
        }else{
            navigation.navigate("SignedOutStack")
        }
    }, []);
    return(
        <View style={styles.viewPort}>
            <View style={styles.imageView}>
                <Image 
                    source={logo}
                    style={styles.image}
                />
            </View>
            <View style={styles.providerText}>
                <Text style={styles.from}>from</Text>
                <Varsel fontSize={30} color="black" />
            </View>
        </View>
    )
}

export default ResolveAuth

const styles = StyleSheet.create({
    viewPort: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageView: {
        width: WINDOW_WIDTH / 5,
        height: WINDOW_WIDTH / 5,
    },
    image: {
        width: "100%",
        height: "100%"
    },
    providerText: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20
    },
    from: {
        color: "grey"
    }
})