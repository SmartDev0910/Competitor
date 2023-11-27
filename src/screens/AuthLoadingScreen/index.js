import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../../routes/AuthStack';
import AppStack from '../../routes/AppStack';

export default function AuthLoadingScreen({userToken = false}) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userToken ? (
        <Stack.Screen name="AppStack" component={AppStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
