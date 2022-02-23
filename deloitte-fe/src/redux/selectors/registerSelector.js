/* eslint-disable */
import { createSelector } from 'reselect';

const getRegister = state =>  state.register;

export const registeringInInSelector = createSelector([getRegister], register => register && register.registeringIn);

export const registerError = createSelector([getRegister], register => register && register.error);


