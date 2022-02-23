/* eslint-disable */
import axios from 'axios';
export const beURL = 'https://nodejs-deploy-todo.herokuapp.com'

export const category = () =>
  new Promise((resolve, reject) => {   
        let url = `${beURL}/category`;
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

  export const createCategory = (item) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/category`;
    const params = {
      item
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

export const updateCategoryName = (item, id) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/category/${id}`;
    const params = {
      item
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

export const deleteCategoryId = (id) => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/category/${id}`;
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