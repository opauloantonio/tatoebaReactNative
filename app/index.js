import React from 'react';

import Tabs from './navigation';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { DefaultTheme, ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4caf50',
  },
};

const LoadingScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator animating={true} color="#4caf50"/>
  </View>
)

const App = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </PaperProvider>
    </PersistGate>
  </ReduxProvider>
);

export default App;
