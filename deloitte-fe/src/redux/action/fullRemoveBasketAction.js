/* eslint-disable */
import { FULL_REMOVE_BASKET_DATA } from '../constants/reduxConstants';

export const fullRemoveBasket = () => (dispatch) => {
  dispatch({
    type: FULL_REMOVE_BASKET_DATA,
  });
};
