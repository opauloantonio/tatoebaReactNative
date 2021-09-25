import { combineReducers } from 'redux';

import favoriteLanguagesReducer from './favoriteLanguagesReducer';
import bookmarksReducer from './bookmarksReducer';
import historyReducer from './historyReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  favoriteLanguagesReducer,
  bookmarksReducer,
  historyReducer,
  settingsReducer,
});
