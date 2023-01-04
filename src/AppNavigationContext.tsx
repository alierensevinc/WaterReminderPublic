import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import {colorPalette} from "./constants/color";
import {useAuthContext} from "./context/AuthContext";
import HomeScreen from "./screens/signedIn/HomeScreen";
import SettingsScreen from "./screens/signedIn/SettingsScreen";
import SignInScreen from "./screens/preSignedIn/SignInScreen";
import SignUpScreen from "./screens/preSignedIn/SignUpScreen";
import CalendarScreen from "./screens/signedIn/CalendarScreen";
import CalendarDetailScreen from "./screens/signedIn/CalendarDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const returnScreenOptions = (route) => {
    return {
        tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'settings') {
                iconName = focused ? 'settings' : 'settings-outline';
            } else {
                iconName = focused ? 'calendar' : 'calendar-outline';
            }

            return <Ionicons name={iconName} size={30} color={colorPalette.primary}/>;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        initialRouteName: 'home'
    }
}

export default function AppNavigationContext() {
    const [state] = useAuthContext();

    const CalendarStackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="calendar" component={CalendarScreen}
                              options={{
                                  headerShown: false,
                              }}/>
                <Stack.Screen name="calendarDetail" component={CalendarDetailScreen}
                              options={{
                                  headerShown: false,
                              }}/>
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            {state.user ?
                (
                    <Tab.Navigator screenOptions={({route}) => returnScreenOptions(route)} initialRouteName="home">
                        <Tab.Screen name="calendar" component={CalendarStackScreen}
                                    options={{
                                        headerShown: false,
                                        tabBarShowLabel: false,
                                    }}/>
                        <Tab.Screen name="home" component={HomeScreen}
                                    options={{
                                        headerShown: false,
                                        tabBarShowLabel: false,
                                    }}/>
                        <Tab.Screen name="settings" component={SettingsScreen}
                                    options={{
                                        headerShown: false,
                                        tabBarShowLabel: false,
                                    }}/>
                    </Tab.Navigator>
                ) : (
                    <Stack.Navigator>
                        <Stack.Screen name="signin" component={SignInScreen}
                                      options={{
                                          headerShown: false,
                                      }}/>
                        <Stack.Screen name="signup" component={SignUpScreen}
                                      options={{
                                          headerShown: false,
                                      }}/>
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    );
}
