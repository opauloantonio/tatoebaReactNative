const settingsActions = {
  TOGGLE_DARK_THEME: "TOGGLE_DARK_THEME",
}

export const toggleDarkTheme = () => ({
  type: settingsActions.TOGGLE_DARK_THEME,
});

export default settingsActions;
