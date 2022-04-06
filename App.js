import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSwitchNavigator } from '@react-navigation/compat'
import { NavigationContainer } from '@react-navigation/native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import ResolveAuth from './src/utils/ResolveAuth'
import Home from './src/screens/Home';
import Search from './src/screens/Search'
import Reels from './src/screens/Reels'
import Activity from './src/screens/Activity'
import Profile from './src/screens/Profile'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const SignedOutStack = () => {
    return(
        <View>
            <Text>Signed Out</Text>
        </View>
    )
}

const BottomTabs = () => { 
    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={({ route })=>({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 50
            },

            tabBarIcon: ({ focused, size, color })=>{
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused ? "home-sharp" : "home-outline"
                    size = focused ? size + 8 : size + 2
                }else if(route.name === 'Search'){
                    iconName = focused ? "search" : "ios-search-outline"
                    size = focused ? size + 8 : size + 2
                }else if(route.name === 'Reels'){
                    iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline"
                    size = focused ? size + 8 : size + 2
                }else if(route.name === 'Activity'){
                    iconName = focused ? "ios-heart" : "ios-heart-outline"
                    size = focused ? size + 8 : size + 2
                }else if(route.name === 'Profile'){
                    iconName = focused ? "ios-person-circle" : "ios-person-circle-outline"
                    size = focused ? size + 8 : size + 2
                }


                return <Ionicon name={iconName} size={size} color={color} />
            }
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Reels" component={Reels} />
            <Tab.Screen name="Activity" component={Activity} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const SignedInStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BottomTabs' component={BottomTabs} />
        </Stack.Navigator>
    )
}

const SwitchNavigator = createSwitchNavigator({
    "ResolveAuth": ResolveAuth,
    "BottomTabs": BottomTabs,
    "SignedOut": SignedOutStack
}, {
    initialRouteName: "BottomTabs",
    headerShown: false
})

const App = () =>{
    return (
        <NavigationContainer>
            <SwitchNavigator />
        </NavigationContainer>
    )
}



export default App;
