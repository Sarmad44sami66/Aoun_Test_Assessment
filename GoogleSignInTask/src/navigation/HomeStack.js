import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
            initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;