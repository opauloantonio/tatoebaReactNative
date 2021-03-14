const bookmarksActions = {
  ADD_BOOKMARK: "ADD_BOOKMARK",
  REMOVE_BOOKMARK: "REMOVE_BOOKMARK",
  CLEAR_BOOKMARKS: "CLEAR_BOOKMARKS",
}

export const addBookmark = sentence => ({
  type: bookmarksActions.ADD_BOOKMARK, sentence
});

export const removeBookmark = sentenceId => ({
  type: bookmarksActions.REMOVE_BOOKMARK, sentenceId
});

export const clearBookmarks = () => ({
  type: bookmarksActions.CLEAR_BOOKMARKS,
});

export default bookmarksActions;
