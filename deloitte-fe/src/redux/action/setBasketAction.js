import { SET_BASKET_DATA } from '../constants/reduxConstants';

export const setBasket = (product) => (dispatch) => {
  console.log(product, 'ğpp')
  dispatch({
    type: SET_BASKET_DATA,
    payload: product,
  });
};
