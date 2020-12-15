const historyActions = {
  ADD_HISTORY_ENTRY: "ADD_HISTORY_ENTRY",
  REMOVE_HISTORY_ENTRY: "REMOVE_HISTORY_ENTRY",
  CLEAR_HISTORY: "CLEAR_HISTORY",
}

export const addEntry = entry => ({
  type: historyActions.ADD_HISTORY_ENTRY, entry
});

export const removeEntry = id => ({
  type: historyActions.REMOVE_HISTORY_ENTRY, id
});

export const clearHistory = () => ({
  type: historyActions.CLEAR_HISTORY,
});

export default historyActions;
