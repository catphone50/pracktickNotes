import { ADD_NOTE, DELETE_NOTE } from "../actions/actionsNote";

const initialState = {
  noteList: [],
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteList: [...state.noteList, payload],
    };
  }
  if (type === DELETE_NOTE){
    return {
      ...state,
      noteList: state.noteList.filter((note)=>note.id !== payload)
    }
  }
  return state;
};

export default noteReducer;
