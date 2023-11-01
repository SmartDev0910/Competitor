import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}>
        <RootStack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            animationEnabled: false,
          }}
        />
        <RootStack.Screen
          name="App"
          component={AppStack}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
