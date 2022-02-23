import { SET_CATEGORY_ID } from '../constants/reduxConstants';

export const setCategoryId = (id) => (dispatch) => {
  dispatch({
    type: SET_CATEGORY_ID,
    payload: id,
  });
};
