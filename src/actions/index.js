// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const ERROR = 'ERROR';
export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(({ data: { results } }) => {
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: results });
    })
    .catch(({ message }) => {
      dispatch({ type: ERROR, payload: message });
    });
};
