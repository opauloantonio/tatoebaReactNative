import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Tabs from './navigation';

import { View, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './store';

import SplashScreen from 'react-native-splash-screen';

import { darkTheme, lightTheme } from './theme';

const themes = { dark: darkTheme, light: lightTheme };

const LoadingScreen = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator animating={true} color="#4caf50"/>
  </View>
);

const App = props => {
  useEffect(() => {
    SplashScreen.hide();
  });

  const systemTheme = useColorScheme();

  const theme = props.settings.theme === "system" ? themes[systemTheme] : themes[props.settings.theme];

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

const mapStateToProps = state => ({
  settings: state.settingsReducer,
});

export default connect(mapStateToProps, null)(App);
