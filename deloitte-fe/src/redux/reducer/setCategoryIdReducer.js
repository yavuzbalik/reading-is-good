/* eslint-disable */
import { SET_CATEGORY_ID } from '../constants/reduxConstants';

const initialState = {
  categoryId: "0",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_ID: {
      return {  
        categoryId: action.payload,
      };
    }
    default:
      return state;
  }
}
