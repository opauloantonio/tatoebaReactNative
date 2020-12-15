import { combineReducers } from 'redux';

import favoriteLanguagesReducer from './favoriteLanguagesReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  favoriteLanguagesReducer,
  historyReducer,
});
