import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import Login from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()
const AuthStack = () => {
    const [session, setSession] = useState<boolean>(false)
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;