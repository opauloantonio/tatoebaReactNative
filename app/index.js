import React from 'react';

import Tabs from './navigation';

import { NavigationContainer } from '@react-navigation/native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4caf50',
  },
};

const App = () => (
  <PaperProvider theme={theme}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  </PaperProvider>
);

export default App;
