import { useState } from 'react';

import { store } from '../store';

import { useColorScheme } from 'react-native';

export default function useTheme() {
  const systemTheme = useColorScheme();
  
  const initalSetting = store.getState().settingsReducer.theme;
  
  const [theme, setTheme] = useState(initalSetting === "system" ? systemTheme : initalSetting);

  const getSettingsTheme = () => {
    const settingsTheme = store.getState().settingsReducer.theme;

    setTheme(settingsTheme === "system" ? systemTheme : settingsTheme);
  };
  
  store.subscribe(getSettingsTheme);

  return theme;
}
