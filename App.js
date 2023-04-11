import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations/AppNavigator';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavigator />
    </GlobalProvider>
  );
};

export default App;
