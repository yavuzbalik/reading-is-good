/* eslint-disable */

import { 
    GET_TODO, 
    GET_TODO_ERROR, 
    SET_IS_LOADING, 
    SET_TODO, 
    SET_TODO_ERROR, 
    UPDATE_ITEM, 
    UPDATE_ITEM_ERROR,
    DELETE_ITEM,
    DELETE_ITEM_ERROR,
  } from '../constants/reduxConstants';
  import initialState from './initialState'
  
  export default function(state = initialState.todo, action) {
    switch (action.type) {
  
      case GET_TODO: {
        const { item } = action.payload;
        return {
          ...state,
          data: item,
        };
      }
  
      case GET_TODO_ERROR: {
  
        return {
          ...state,
          error: true,
        };
      }

      case SET_TODO: {
        const { category } = action.payload;
        return {
          ...state,
          itemAdded: !state.itemAdded
        };
      }
  
  
      case SET_TODO_ERROR: {
        const { item } = action.payload;
        return {
          ...state,
        };
      }

      case UPDATE_ITEM: {
        const { category } = action.payload;
        return {
          ...state,
          itemAdded: !state.itemAdded,
        };
      }
  
      case UPDATE_ITEM_ERROR: {
  
        return {
          ...state,
          error: true,
        };
      }

      case DELETE_ITEM: {
        const { category } = action.payload;
        return {
          ...state,
          itemAdded: !state.itemAdded,
        };
      }
  
      case DELETE_ITEM_ERROR: {
  
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
  