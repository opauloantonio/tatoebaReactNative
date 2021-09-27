import React, { useEffect } from 'react';

import Tabs from './navigation';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';

import SplashScreen from 'react-native-splash-screen';

import { darkTheme, lightTheme } from './theme';

import useTheme from './utils/useTheme';

const themes = { dark: darkTheme, light: lightTheme };

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const theme = themes[useTheme()];

  return(
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tabs theme={theme} />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
