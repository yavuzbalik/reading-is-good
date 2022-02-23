/* eslint-disable */
import { SET_SEARCH_DATA } from '../constants/reduxConstants';

const initialState = {
  search: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_DATA: {
      return {  
        search: action.payload,
      };
    }
    default:
      return state;
  }
}
