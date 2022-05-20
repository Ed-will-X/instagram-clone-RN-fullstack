import { StyleSheet, StatusBar,  View } from 'react-native'
import React from 'react'
import Logo from '../../../components/Logo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const Header = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" barStyle='dark-content' animated={true} />
        <View style={styles.header}>
            <View style={styles.logo}>
                <Logo  />
            </View>
            <View style={styles.icons}>
                <FontAwesome name='plus-square-o' style={styles.icon} />
                <Feather name='navigation' style={styles.icon} />
            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    icon: {
        fontSize: 26,
        color: 'black',
        paddingRight: '5%',
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '5%'
    },
    logo: {
        paddingLeft: '6%'
    },
    viewport: {
        backgroundColor: 'white',
        height: '100%'
    }
})