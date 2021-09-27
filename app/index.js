import React, { useEffect } from 'react';

import Tabs from './navigation';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './store';

import SplashScreen from 'react-native-splash-screen';

import { darkTheme, lightTheme } from './theme';

import useTheme from './utils/useTheme';

const themes = { dark: darkTheme, light: lightTheme };

const LoadingScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator animating={true} color="#4caf50"/>
  </View>
);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const theme = themes[useTheme()];

  return(
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tabs theme={theme} />
        </NavigationContainer>
      </PaperProvider>
    </PersistGate>
  );
}

export default App;
