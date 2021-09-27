import React from 'react';

import App from './app/index';

import { View } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './app/store';

const LoadingScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator animating={true} color="#4caf50"/>
  </View>
);

const StoreWrapper = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);

export default StoreWrapper;
