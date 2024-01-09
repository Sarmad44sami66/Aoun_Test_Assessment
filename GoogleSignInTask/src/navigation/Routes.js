import React,{useEffect,useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Splash from '../screens/Splash';

// Stacks
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


const Stack = createNativeStackNavigator()

const Routes = () => {
  const [session, setSession]= useState(false)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Splash' component={Splash} />
                {session?
                    <Stack.Screen name='AfterSplash' component={HomeStack} />
                    :
                    <Stack.Screen name="AfterSplash" component={AuthStack} />}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;