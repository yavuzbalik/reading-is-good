/* eslint-disable */

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import categoryReducer from './categoryReducer';
import todoReducer from './todoReducer';
import productReducer from './productReducer';
import getSearchReducer from './getSearchReducer';
import setCategoryId from './setCategoryIdReducer';
import setBasket from './setBasketReducer';

export default combineReducers({
  user: authReducer,
  register: registerReducer,
  category: categoryReducer,
  todo: todoReducer,
  product: productReducer,
  search: getSearchReducer,
  categoryId: setCategoryId,
  basket: setBasket,
});
