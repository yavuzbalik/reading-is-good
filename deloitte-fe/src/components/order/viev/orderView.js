/* eslint-disable */
import React from 'react';
import OrderContainer from '../container/orderContainer';
import BasketIcon from '../../../assets/images/basket.png';
import BasketStar from '../../../assets/images/basket2.png';
import '../style/orderStyles.scss';
import { numberFormatter } from '../../../helpers';

const Order = () => (
  <OrderContainer>
    {({ orders,openOrderOnclick, closeOrderOnClick }) => {
      console.log(orders)
    return(
      <div style={{ position: "relative" }}>
      <div className="order-container">
        <button className="order-icon-button" onClick={()=>{
          console.log("icon on click geldi")
          openOrderOnclick()}}>
          <img alt="logo" className="order-icon" src={BasketIcon} />
          <span className="order-icon-button-text">
            Siparişlerim
          </span>
        </button>
        {orders && orders.length > 0 && 
          <div className="order-icon-length">
            {orders.length}
          </div>
        }
      </div>
      {orders && orders.length > 0 && 
          <div className="order-popover">
            <div className="order-popover-header">
               {orders && orders.map((bask,index) => {
                 return (
                   <div key={index} style= {{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%", color: "#fff", flexDirection: "column", height:"auto"}}>
                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around",  width: "100%"}}>
                        <div>
                          {bask.title}
                        </div>
                        <div>
                          {bask.quantity}
                        </div>
                        <div>
                          {bask.amount} TL
                        </div>
                        </div>
                        
                    </div>
                 )
               })}
               <div className="product-card-container-body-button">
                  <button onClick={() => closeOrderOnClick()} className="product-card-button">
                     <span>Kapat</span>
                  </button> 
                </div>
            </div>
          </div>
        }
      </div>
    )}}
  </OrderContainer>
);

export default Order;
