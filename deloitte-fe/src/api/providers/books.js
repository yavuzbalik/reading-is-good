/* eslint-disable */
import axios from 'axios';
export const beURL = 'http://localhost:8080'


  export const getBook = () => 
  new Promise((resolve, reject) => {   
    let url = `${beURL}/books`;
    
    axios
    .get(url,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
     if (res.status === 200) {
      return resolve(res.data.response);
      }else {
       reject('Error');
     }
    })
    .catch(error => {
      reject(error);
    });
});
