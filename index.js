import * as React from 'react';
import {AppRegistry} from 'react-native';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import rootReducer from './src/redux/reducer';
// import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';

// const store = createStore(rootReducer);

export default function Main() {
  return (
    // <PaperProvider>
    // <Provider store={store}>
    <App />
    // </Provider>
    // </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
