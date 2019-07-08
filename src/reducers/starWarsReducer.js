import {
  ERROR,
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
} from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        fetching: true,
        error: '',
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: payload,
        fetching: false,
        error: '',
      };
    default:
      return state;
  }
};
