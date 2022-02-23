import { SET_SEARCH_DATA } from '../constants/reduxConstants';

export const getSearch = (input) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_DATA,
    payload: input,
  });
};
