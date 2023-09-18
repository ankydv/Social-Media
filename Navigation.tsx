import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Entypo  from 'react-native-vector-icons/Entypo';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel: "Home",
                headerShown: false,
                tabBarLabelStyle:{color: "black"},
                tabBarIcon:({focused}) =>
                    focused ?(
                        <Entypo name="home" size={24} color="black" />
                    ):(
                        <AntDesign name="home" size={24} color="black" />
                    )
            }}
            />
            <Tab.Screen name="profile" component={ProfileScreen}
            options={{
                tabBarLabel: "Profile",
                headerShown: false,
                tabBarLabelStyle:{color: "black"},
                tabBarIcon:({focused}) =>
                    focused ? (<Ionicons name="person" size={24} color="green" />
                    ):(
                    <Ionicons name="person-outline" size={24} color="black" />
                    )
            }} />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={BottomTabs}
                options={{
                    headerShown:false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;