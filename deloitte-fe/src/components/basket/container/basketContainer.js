/* eslint-disable */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash'
import axios from 'axios';

// Selectors
import { getBasketSelector } from '../../../redux/selectors';

// Actions
import { fullRemoveBasket } from '../../../redux/action';

const BasketContainer = ({ children , basket, fullRemoveBasket}) => {
  const [remaining, setRemaining] = useState(500)

  useEffect(() => {
  let remainingData = 500 -  _.sum(basket.map(data => parseFloat(data.price)))
    setRemaining(remainingData)
  }, [basket]);

  const _productCardOnClick = (basket) => {
    console.log(basket, "baskerr");
    const items = basket.reduce((groupOfItem, { id, quantity }) => {
      if (!groupOfItem[id]) groupOfItem[id] = [];
      groupOfItem[id].push(id);
      return groupOfItem;
    }, {}); 

    console.log(items, "items")
     const beURL = 'http://localhost:8080/orders'

    let books = [];
    for (const [key, value] of Object.entries(items)) {
      let i= {
        book:{id:key},
        quantity:value.length
    }
    books.push(i)
    }
       
     
    const params = {
      books
      
    }

    axios
    .post(beURL,params, { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
       console.log(res.data)
       fullRemoveBasket()
    })
    .catch(error => {
      reject(error);
    });
  }

  return children && children({ basket, remaining, productCardOnClick: _productCardOnClick });
};

BasketContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  basket: getBasketSelector(state),
});

const mapDispatchToProps = {
  fullRemoveBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
