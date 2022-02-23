/* eslint-disable */
import { SET_BASKET_DATA, REMOVE_BASKET_DATA, FULL_REMOVE_BASKET_DATA } from '../constants/reduxConstants';

const initialState = {
  basket: [],
};

export default function (state = initialState.basket, action) {
  switch (action.type) {
    case SET_BASKET_DATA: {
         return [...state, action.payload];
    }

    case FULL_REMOVE_BASKET_DATA: {
      return []
    }
    case REMOVE_BASKET_DATA: {
      // Piece bilgisi gönderilerekte yapılabilirdi. Sepete eklendiği an ilgili piece verisi eklenebilirdi.
      const removedElements = state.map(data => { return { ...data } })
        .filter(index => index.title === action.payload.title).splice(1)
      const remainingElements = state.map(data => { return { ...data } })
      .filter(index => index.title !== action.payload.title)
       return [...removedElements, ...remainingElements];
  }
    default:
      return state;
  }
}
