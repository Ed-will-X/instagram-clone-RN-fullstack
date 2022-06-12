import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { WINDOW_WIDTH } from '../../../constants/values'
import Header from '../components/Header'

const EditTextPage = ({ route }) => {
    const { title, value } = route.params
    const [ text, setText ] = useState(value)
    return(
        <View style={styles.viewPort}>
            <Header headerName={title} />
            <View style={styles.input}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    autoCapitalize='none'
                    placeholder={title}
                    placeholderTextColor="grey"
                    value={text}
                    style={styles.value}
                    onChangeText={(newValue)=> setText(newValue)}
                />
                <View style={styles.line}></View>
            </View>
        </View>
    )
}

export default EditTextPage

const styles = StyleSheet.create({
    line: {
        borderWidth: 0.2,
        borderColor: "#aaaaaa"
    },
    input: {
        marginHorizontal: WINDOW_WIDTH / 30,
        marginTop: WINDOW_WIDTH / 17
    },
    value: {
        // marginVertical: WINDOW_WIDTH / 200,
        color: "black",
        fontSize: 16
    },
    title: {
        color: "grey"
    },
    viewPort: {
        backgroundColor: "white",
        flex: 1
    }
})