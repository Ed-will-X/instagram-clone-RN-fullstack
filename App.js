import React,{ useState, useEffect, useContext } from 'react';
import {
  StatusBar,
  Text,
  View,
  Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSwitchNavigator } from '@react-navigation/compat'
import { NavigationContainer } from '@react-navigation/native'
import Ionicon from 'react-native-vector-icons/Ionicons'

import ResolveAuth from './src/utils/ResolveAuth'
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search'
import Reels from './src/screens/Reels/Reels'
import Activity from './src/screens/Activity/Activity'
import Profile from './src/screens/Profile/Profile'
import { MockProvider } from './src/context/MockContext';
import StoryScreen from './src/screens/StoryScreen/StoryScreen';
import OtherProfile from './src/screens/OtherProfile/OtherProfile';
import Login from './src/screens/Authentication/Login/Login';
import Signup from './src/screens/Authentication/Signup/Signup';
import InitialPage from './src/screens/Authentication/InitialPage/IntialPage';
import EditProfile from './src/screens/EditProfile/EditProfile';
import EditTextPage from './src/screens/EditProfile/EditTextPage/EditTextPage';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import pfp from "./assets/images/empty-pfp.png"
import useGetUser from './src/utils/hooks/useGetUser';
import { UserProvider } from './src/context/UserContext';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';
import { UsersProvider } from './src/context/UsersContext';

const LocalImageUri = Image.resolveAssetSource(pfp).uri;

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const SignedOutStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InitialPage" component={InitialPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

const BottomTabs = ({ navigation }) => {
    // const [ user, setUser ] = useState({})
    // const { getUserFromStorage } = useContext(UserContext)

    const [ user ] = useGetUser(navigation)

    // useEffect(async()=>{
    //     const user = await getUserFromStorage()
    //     setUser(user)
    // }, [])
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
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused })=> (
                        <View style={{ backgroundColor: "black", borderRadius: 30, padding: focused ? 2: 0, justifyContent: "center", alignItems: "center" }}>
                            <Image source={{ uri: user.profilePic ? 'data:image/jpeg;base64,' + user.profilePic : LocalImageUri }} style={{ width: 30, height: 30, borderRadius: 30 }} />
                        </View>
                    )
                }}
                 />
        </Tab.Navigator>
    )
}

const SignedInStack = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BottomTabs' component={BottomTabs} />
            <Stack.Screen name='StoryScreen' component={StoryScreen} />
            <Stack.Screen name="OtherProfile" component={OtherProfile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="EditTextPage" component={EditTextPage} />
            <Stack.Screen name="SearchScreen" options={{ animationEnabled: false }} component={SearchScreen} />
        </Stack.Navigator>
    )
}

const SwitchNavigator = createSwitchNavigator({
    "ResolveAuth": ResolveAuth,
    "SignedInStack": SignedInStack,
    "SignedOutStack": SignedOutStack
}, {
    initialRouteName: "ResolveAuth",
    headerShown: false
})

const App = () =>{
    return (
        <NavigationContainer>
            <SwitchNavigator />
        </NavigationContainer>
    )
}

export default ()=>{
    return(
        <UsersProvider>
            <AuthProvider>
                <UserProvider>
                    <MockProvider>
                        <App />
                    </MockProvider>
                </UserProvider>
            </AuthProvider>
        </UsersProvider>
    )
}
