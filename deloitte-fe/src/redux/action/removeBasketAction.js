/* eslint-disable */
import { REMOVE_BASKET_DATA } from '../constants/reduxConstants';

export const removeBasket = (title) => (dispatch) => {
  dispatch({
    type: REMOVE_BASKET_DATA,
    payload: {
        title,
    },
  });
};
