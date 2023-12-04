import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SplashScreen from './src/screens/SplashScreen';
import {AuthProvider} from './src/providers/AuthProvider';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthProvider>
        <AuthLoadingScreen />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
