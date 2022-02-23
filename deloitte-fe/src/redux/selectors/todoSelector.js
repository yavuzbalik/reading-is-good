/* eslint-disable */
import { createSelector } from 'reselect';

const getItem = state =>  state.todo;

export const itemSelector = createSelector([getItem], todo => todo && todo.data);

export const itemAddedSelector = createSelector([getItem], todo => todo && todo.itemAdded);

export const itemLoading = createSelector([getItem], todo => todo && todo.isLoading);


