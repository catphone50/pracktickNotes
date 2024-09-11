import { ADD_NOTE, DELETE_NOTE } from "../actions/actionsNote";

const initialState = {
  noteList: [],
  noteCount: 0,
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteList: [...state.noteList, payload],
      noteCount: state.noteCount + 1,
    };
  }
  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteList: state.noteList.filter((note) => note.id !== payload),
      noteCount: state.noteCount - 1,
    };
  }
  return state;
};

export default noteReducer;
