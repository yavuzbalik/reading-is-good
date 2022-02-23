import { SET_PRODUCTS_DATA, SET_IS_LOADING } from '../constants/reduxConstants';

const initialState = {
  data: [],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS_DATA: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
