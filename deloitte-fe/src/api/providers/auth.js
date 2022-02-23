/* eslint-disable */
import axios from 'axios';
export const beURL = 'http://localhost:8080'

export const getLogin = (username, password) =>
  new Promise((resolve, reject) => {   
      const params = {
        username,
        password,
      };
        let url = `${beURL}/signin`;
        axios
        .post(`${url}`, params)
         .then(res => {
         if (res.status === 200) {
          return resolve(res.data);
          }else {
           reject('Username or password is incorrect');
         }
        })
        .catch(error => {
          reject(error);
        });
  });

  export const getRegister = (username, password) =>
  new Promise((resolve, reject) => {   
      const params = {
        username,
        password
      };
        let url = `${beURL}/signup`;
        axios
        .post(`${url}`, params)
         .then(res => {
         if (res.status === 200) {
          return resolve(res.data);
          }else {
           reject('Username or password is incorrect');
         }
        })
        .catch(error => {
          reject(error);
        });
  });