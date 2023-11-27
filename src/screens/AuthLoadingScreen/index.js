import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from '../../routes/AuthStack';
import AppStack from '../../routes/AppStack';
import {AuthContext} from '../../providers/AuthProvider';

export default function AuthLoadingScreen() {
  const Stack = createStackNavigator();
  const [isAuth, setIsAuth] = React.useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name="AppStack" component={AppStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
