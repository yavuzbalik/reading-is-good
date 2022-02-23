/* eslint-disable */
import {
    GET_CATEGORY,
    GET_CATEGORY_ERROR,
    SET_CATEGORY,
    SET_CATEGORY_ERROR,
    SET_IS_LOADING,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_ERROR,
    DELETE_CATEGORY,
    DELETE_CATEGORY_ERROR
  } from '../constants/reduxConstants';
  
  import { category, createCategory, updateCategoryName, deleteCategoryId } from '../../api/providers/category';

  import { history } from '../../history';

  export const getCategory = () => dispatch => {
    setIsLoading(dispatch, true);
    category()
      .then(category => {
        dispatch({
          type: GET_CATEGORY,
          payload: { category },
        });
        setIsLoading(dispatch, false);
        return category;
      })
      .catch(error => {
        setIsLoading(dispatch, false);
        dispatch({
          type: GET_CATEGORY_ERROR,
          payload: error,
        });
      })
  };

  export const setCategory = (item) => dispatch => {
    createCategory(item)
      .then(category => {
        dispatch({
          type: SET_CATEGORY,
          payload: { category },
        });
        return category;
      })
      .catch(error => {
        dispatch({
          type: SET_CATEGORY_ERROR,
          payload: error,
        });
      })
  };

  export const updateCategory = (item, id) => dispatch => {
    updateCategoryName(item, id)
      .then(category => {
        dispatch({
          type: UPDATE_CATEGORY,
          payload: { category },
        });
        return category;
      })
      .catch(error => {
        dispatch({
          type: UPDATE_CATEGORY_ERROR,
          payload: error,
        });
      })
  };

  export const deleteCategory = (id) => dispatch => {
    deleteCategoryId(id)
      .then(category => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: { category },
        });
        return category;
      })
      .catch(error => {
        dispatch({
          type: DELETE_CATEGORY_ERROR,
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