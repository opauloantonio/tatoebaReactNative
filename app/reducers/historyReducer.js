import historyActions from '../actions/historyActions';

const initialState = {
  history: [],
  lastId: 0,
}

const historyReducer = (state = initialState, action) => {
  switch(action.type) {
    case historyActions.ADD_HISTORY_ENTRY:
      return {
        ...state,
        history: [...state.history, {...action.entry, id: state.lastId}], 
        lastId: state.lastId + 1
      }

    case historyActions.REMOVE_HISTORY_ENTRY:
      return {...state, history: state.history.filter(e => e.id !== action.id)}

    case historyActions.CLEAR_HISTORY:
      return {...state, history: []}
    
    default:
      return state;
  }
}

export default historyReducer;
