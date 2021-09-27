import { useState } from 'react';

import { store } from '../store';

import { useColorScheme } from 'react-native';

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  const systemTheme = useColorScheme();

  const getSettingsTheme = () => {
    const settingsTheme = store.getState().settingsReducer.theme;

    setTheme(settingsTheme === "system" ? systemTheme : settingsTheme);
  };
  
  store.subscribe(getSettingsTheme);

  return theme;
}
