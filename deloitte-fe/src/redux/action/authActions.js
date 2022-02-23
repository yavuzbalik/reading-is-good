/* eslint-disable */
import {
    SET_LOGIN_REQUEST,
    SET_LOGIN,
    SET_LOGIN_ERROR,
    SET_LOGGEDIN,
    SET_ISUSER_LOADING
  } from '../constants/reduxConstants';
  
  import { getLogin } from '../../api/providers/auth';

  import { history } from '../../history';

  export const login = (username, password) => dispatch => {
    setLoggingIn(dispatch, true);
    setIsLoading(dispatch, true);
    getLogin(username, password)
      .then(user => {
        console.log(user, "denemee")
          localStorage.setItem('userToken', user.accessToken);
          localStorage.setItem('loggedIn', true);
        dispatch({
          type: SET_LOGIN,
          payload: { user },
        });
        setLoggingIn(dispatch, false);
        setLoggedIn(dispatch, true);
        setIsLoading(dispatch, false);
        history.push("/home")
        return user;
      })
      .catch(error => {
        setLoggingIn(dispatch, false);
        setIsLoading(dispatch, false);
        dispatch({
          type: SET_LOGIN_ERROR,
          payload: error,
        });
      })
  };

  export const loggedIn = (value) => dispatch => {
    setLoggedIn(dispatch, value);
  };
  
  export const setUserData = data => ({
    type: SET_LOGIN,
    payload: data,
  });
  
  export const setIsLoading = (dispatch, data) => {
    dispatch({
      type: SET_ISUSER_LOADING,
      payload: data,
    });
  };

  export const setLoggedIn = (dispatch, value) => {
    dispatch({
      type: SET_LOGGEDIN,
      payload: value,
    });
  };

  export const setLoggingIn = (dispatch, value) => {
    dispatch({
      type: SET_LOGIN_REQUEST,
      payload: value,
    });
  };
  