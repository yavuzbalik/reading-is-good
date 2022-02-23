/* eslint-disable */
import {
    SET_REGISTER_REQUEST,
    SET_REGISTER,
    SET_REGISTER_ERROR,
  } from '../constants/reduxConstants';
  
  import { getRegister } from '../../api/providers/auth';

  import { history } from '../../history';

  export const register = (username, password) => dispatch => {
    setRegisteredIn(dispatch, true);
    getRegister(username, password)
      .then(register => {
        dispatch({
          type: SET_REGISTER,
          payload: { register },
        });
        setRegisteredIn(dispatch, false);
       
        history.push("/login")
        return register;
      })
      .catch(error => {
        setRegisteredIn(dispatch, false);
        dispatch({
          type: SET_REGISTER_ERROR,
          payload: error,
        });
      })
  };

  
  export const setUserData = data => ({
    type: SET_REGISTER,
    payload: data,
  });
  
  export const setRegisteredIn = (dispatch, value) => {
    dispatch({
      type: SET_REGISTER_REQUEST,
      payload: value,
    });
  };
  