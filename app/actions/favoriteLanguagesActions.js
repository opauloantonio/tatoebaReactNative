const favoriteLanguagesActions = {
  TOGGLE_FAVORITE_LANGUAGE: "TOGGLE_FAVORITE_LANGUAGE"
}

export const toggleFavorite = code => ({
  type: favoriteLanguagesActions.TOGGLE_FAVORITE_LANGUAGE, code
});

export default favoriteLanguagesActions;
