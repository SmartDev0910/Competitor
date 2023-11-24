import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {HomeScreen, SignInScreen, SignUpScreen} from '../screens';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
