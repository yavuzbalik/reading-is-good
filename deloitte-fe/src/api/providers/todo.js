/* eslint-disable */
import axios from 'axios';
export const beURL = 'https://nodejs-deploy-todo.herokuapp.com'

export const item = () =>
  new Promise((resolve, reject) => {   
        let url = `${beURL}/todo`;
        axios
        .get(`${url}`,  { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}`} })
         .then(res => {
         if (res.status === 200) {
          return resolve(res.data);
          }else {
           reject('Error');
         }
        })
        .catch(error => {
          reject(error);
        });
  });

  export const createItem = (categoryName, itemName, status) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/todo`;
    const params = {
      item: itemName,
      category: categoryName,
      status
    }
    axios
    .post(url, params ,  { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
     if (res.status === 200) {
      return resolve(res.data);
      }else {
       reject('Error');
     }
    })
    .catch(error => {
      reject(error);
    });
});

export const updateItemName = (item, id, status, category) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/todo/${id}`;
    const params = {
      item
    }
    if(status) {
        params.status = status
    }
    if(category) {
        params.category = category
    }
    axios
    .put(url, params ,  { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
     if (res.status === 200) {
      return resolve(res.data);
      }else {
       reject('Error');
     }
    })
    .catch(error => {
      reject(error);
    });
});

export const deleteItemId = (id) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/todo/${id}`;
    axios
    .delete(url, { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
     if (res.status === 200) {
      return resolve(res.data);
      }else {
       reject('Error');
     }
    })
    .catch(error => {
      reject(error);
    });
});