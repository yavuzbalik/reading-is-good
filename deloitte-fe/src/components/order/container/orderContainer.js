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

const OrderContainer = ({ children , order}) => {
  const [remaining, setRemaining] = useState(500)
  const [orders, setOrders] = useState([])

  useEffect(() => {
  let remainingData = 500 -  _.sum(order.map(data => parseFloat(data.price)))
    setRemaining(remainingData)
  }, [order]);

  

  const _openOrderOnclick = () => {
    // const items = order.reduce((groupOfItem, { id, quantity }) => {
    //   if (!groupOfItem[id]) groupOfItem[id] = [];
    //   groupOfItem[id].push(id);
    //   return groupOfItem;
    // }, {}); 

    // console.log(items, "items")
     const beURL = 'http://localhost:8080/orders/customer'

    axios
    .get(beURL, { headers: {"Authorization" : `Bearer ${localStorage.getItem('userToken')}` , "Access-Control-Allow-Origin": "*"} })
     .then(res => {
      let orderArr =[]

      res.data.response.forEach((e)=>{
          
            e.books.forEach((el)=>{
              orderArr.push({title:el.book.title,quantity:el.quantity,amount:el.book.price*el.quantity})
                
            })
          
      }) 
      setOrders(orderArr)
    })
    .catch(error => {
      console.log("error occured "+error )
    });
  }
console.log(orders)

const closeOrderOnClick = ()=>{
setOrders([])
}
  return children && children({ orders, remaining, openOrderOnclick: _openOrderOnclick, closeOrderOnClick });
};

OrderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: getBasketSelector(state),
});

const mapDispatchToProps = {
  fullRemoveBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);
