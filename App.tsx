import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import SplashScreen from './src/screens/SplashScreen';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthLoadingScreen />
    </NavigationContainer>
  );
}

export default App;
