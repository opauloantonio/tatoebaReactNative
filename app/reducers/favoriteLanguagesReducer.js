import favoriteLanguagesActions from '../actions/favoriteLanguagesActions';

const initialState = {
  favorites: [],
}

const favoriteLanguagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case favoriteLanguagesActions.TOGGLE_FAVORITE_LANGUAGE:
      return {
        ...state,
        favorites: state.favorites.includes(action.code) ? 
          state.favorites.filter(c => c !== action.code) : [...state.favorites, action.code]
      }
    
    default:
      return state;
  }
}

export default favoriteLanguagesReducer;
