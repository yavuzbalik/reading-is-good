/* eslint-disable */

import { 
  GET_CATEGORY, 
  GET_CATEGORY_ERROR, 
  SET_IS_LOADING, 
  SET_CATEGORY, 
  SET_CATEGORY_ERROR, 
  UPDATE_CATEGORY, 
  UPDATE_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR
} from '../constants/reduxConstants';
import initialState from './initialState'

export default function(state = initialState.category, action) {
  switch (action.type) {

    case GET_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        data: category,
        updatedName: false
      };
    }

    case GET_CATEGORY_ERROR: {

      return {
        ...state,
        error: true,
      };
    }

    case SET_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        categoryAdded: !state.categoryAdded
      };
    }

    case SET_CATEGORY_ERROR: {

      return {
        ...state,
        error: true,
      };
    }

    case UPDATE_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        categoryAdded: !state.categoryAdded,
        updatedName: true
      };
    }

    case UPDATE_CATEGORY_ERROR: {

      return {
        ...state,
        error: true,
      };
    }

    case DELETE_CATEGORY: {
      const { category } = action.payload;
      return {
        ...state,
        categoryAdded: !state.categoryAdded,
      };
    }

    case DELETE_CATEGORY_ERROR: {

      return {
        ...state,
        error: true,
      };
    }

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}
