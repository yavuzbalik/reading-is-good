/* eslint-disable */
import { SET_PRODUCTS_DATA, SET_IS_LOADING } from '../constants/reduxConstants';


import { getBook } from '../../api/providers/books';


export const getProductList = (search) => (dispatch) => {
  setIsLoading(dispatch, true);
  // const newProduct = products.filter(data => data.title.toUpperCase().includes(search.toUpperCase()))
  // let productList = newProduct
  // if(categoryId !== "0") {
  //   productList = newProduct.filter(product => product.categoryId === categoryId)
  // }
  // dispatch({
  //   type: SET_PRODUCTS_DATA,
  //   payload: productList,
  // });
  getBook()
      .then(user => {
        console.log(user,search, "denemee")
        let test = user.filter(us => us.title.toUpperCase().includes(search.toUpperCase()))
        console.log(test," test")
        dispatch({
          type: SET_PRODUCTS_DATA,
          payload: test ,
        });
        setIsLoading(dispatch, false);
        history.push("/home")
        return user;
      })
      .catch(error => {
        setIsLoading(dispatch, false);
        dispatch({
          type: "SET_LOGIN_ERROR",
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