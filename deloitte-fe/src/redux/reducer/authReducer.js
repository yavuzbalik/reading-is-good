/* eslint-disable */

import { SET_LOGIN, SET_LOGIN_REQUEST, SET_LOGGEDIN, SET_LOGIN_ERROR, SET_ISUSER_LOADING } from '../constants/reduxConstants';
import initialState from './initialState'

export default function(state = initialState.user, action) {
  switch (action.type) {

    case SET_LOGIN_REQUEST: {

      return {
        ...state,
        loggingIn: action.payload
      };
    }
    case SET_LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        token: user.token,
        isLoading: false,
        error: false,
        loggedIn: true
      };
    }

    case SET_LOGIN_ERROR: {

      return {
        ...state,
        error: true,
        loggedIn: false
      };
    }

    case SET_LOGGEDIN: {
      const { user } = action.payload;
      return {
        ...state,
        loggedIn: action.payload,
      };
    }

    case SET_ISUSER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
