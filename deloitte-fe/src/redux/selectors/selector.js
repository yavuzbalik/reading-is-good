/* eslint-disable */

import { createSelector } from 'reselect';

const getProduct = (state) => state.product;
const getSearch = (state) => {
  return state.search
}

const getCategoryId = (state) => {
  return state.categoryId
}

const getBasket = (state) => {
  return state.basket
}

export const productsSelector = createSelector([getProduct], (product) => product && product.data);

export const isLoadingSelector = createSelector(
  [getProduct],
  (product) => product && product.isLoading,
);

export const searchInputSelector = createSelector(
  [getSearch],
  (search) => search && search.search,
);

export const getCategoryIdSelector = createSelector(
  [getCategoryId],
  (category) => category && category.categoryId,
);

export const getBasketSelector = createSelector(
  [getBasket],
  (basket) => basket,
);
