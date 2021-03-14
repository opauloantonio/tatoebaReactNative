import bookmarksActions from '../actions/bookmarksActions';

const initialState = {
  bookmarks: [],
}

const bookmarksReducer = (state = initialState, action) => {
  switch(action.type) {
    case bookmarksActions.ADD_BOOKMARK:
      return {...state, bookmarks: [...state.bookmarks, action.sentence]}

    case bookmarksActions.REMOVE_BOOKMARK:
      return {...state, bookmarks: state.bookmarks.filter(sentence => sentence.id !== action.sentenceId)}

    case bookmarksActions.CLEAR_BOOKMARKS:
      return {...state, bookmarks: []}

    default:
      return state;
  }
}

export default bookmarksReducer;
