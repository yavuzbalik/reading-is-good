/* eslint-disable */

import { SET_REGISTER_REQUEST, SET_REGISTER, SET_REGISTER_ERROR } from '../constants/reduxConstants';
import initialState from './initialState'

export default function(state = initialState.register, action) {
  switch (action.type) {

    case SET_REGISTER_REQUEST: {

      return {
        ...state,
        registeringIn: action.payload
      };
    }
    case SET_REGISTER: {
      return {
        ...state,
        error: false,
      };
    }

    case SET_REGISTER_ERROR: {

      return {
        ...state,
        error: true,
      };
    }

    default:
      return state;
  }
}
