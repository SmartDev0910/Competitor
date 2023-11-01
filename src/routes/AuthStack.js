import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
