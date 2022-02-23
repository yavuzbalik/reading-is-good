/* eslint-disable */
import {
    GET_TODO,
    GET_TODO_ERROR,
    SET_TODO,
    SET_TODO_ERROR,
    UPDATE_ITEM,
    UPDATE_ITEM_ERROR,
    DELETE_ITEM,
    DELETE_ITEM_ERROR
  } from '../constants/reduxConstants';
  
  import { item, createItem, updateItemName, deleteItemId } from '../../api/providers/todo'

  import { history } from '../../history';

  export const getItem = () => dispatch => {
    item()
      .then(item => {
        dispatch({
          type: GET_TODO,
          payload: { item },
        });
        return category;
      })
      .catch(error => {
        dispatch({
          type: GET_TODO_ERROR,
          payload: error,
        });
      })
  };

  export const setItem = (categoryName, itemName, status) => dispatch => {
    createItem(categoryName, itemName, status)
      .then(category => {
        dispatch({
          type: SET_TODO,
          payload: { category },
        });
        return category;
      })
      .catch(error => {
        dispatch({
          type: SET_TODO_ERROR,
          payload: error,
        });
      })
  };

  export const updateItem = (item, id, status, category) => dispatch => {
    updateItemName(item, id, status, category)
      .then(item => {
        dispatch({
          type: UPDATE_ITEM,
          payload: { item },
        });
        return item;
      })
      .catch(error => {
        dispatch({
          type: UPDATE_ITEM_ERROR,
          payload: error,
        });
      })
  };

  export const deleteItem = (id) => dispatch => {
    deleteItemId(id)
      .then(item => {
        dispatch({
          type: DELETE_ITEM,
          payload: { item },
        });
        return item;
      })
      .catch(error => {
        dispatch({
          type: DELETE_ITEM_ERROR,
          payload: error,
        });
      })
  };

  export const setIsLoading = (dispatch, data) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: data,
    });
  };