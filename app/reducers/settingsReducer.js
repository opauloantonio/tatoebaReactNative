import settingsActions from "../actions/settingsActions";

const initialState = {
  theme: "system",
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case settingsActions.TOGGLE_DARK_THEME:
      return {
        ...state,
        theme: state.theme === "system" ? "light" : state.theme === "light" ? "dark" : "system"
      }
    
    default:
      return state;
  }
}

export default reducer;
