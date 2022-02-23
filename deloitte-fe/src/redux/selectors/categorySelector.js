/* eslint-disable */
import { createSelector } from 'reselect';

const getCategory = state =>  state.category;

export const categorySelector = createSelector([getCategory], category => category && category.data);

export const categoryAddedSelector = createSelector([getCategory], category => category && category.categoryAdded);

export const categoryUpdatedNameSelector = createSelector([getCategory], category => category && category.updatedName);

export const categoryLoading = createSelector([getCategory], category => category && category.isLoading);


