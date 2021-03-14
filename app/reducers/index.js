import { combineReducers } from 'redux';

import favoriteLanguagesReducer from './favoriteLanguagesReducer';
import bookmarksReducer from './bookmarksReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  favoriteLanguagesReducer,
  bookmarksReducer,
  historyReducer,
});
