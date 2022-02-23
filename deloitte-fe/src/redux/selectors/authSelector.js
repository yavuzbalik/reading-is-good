/* eslint-disable */
import { createSelector } from 'reselect';

const getUser = state =>  state.user;

export const loggedInSelector = createSelector([getUser], user => user && user.loggedIn);

export const loggingInInSelector = createSelector([getUser], user => user && user.loggingIn);

export const isUserLoadingSelector = createSelector([getUser], user => user && user.isLoading);

export const isTokenSelector = createSelector([getUser], user => user && user.token);

export const isLoginError = createSelector([getUser], user => user && user.error);


