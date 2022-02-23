/* eslint-disable */
import React from 'react';
import BasketContainer from '../container/basketContainer';
import BasketIcon from '../../../assets/images/basket.png';
import BasketStar from '../../../assets/images/basket2.png';
import '../style/basketStyles.scss';
import { numberFormatter } from '../../../helpers';

const Basket = () => (
  <BasketContainer>
    {({ basket, remaining, productCardOnClick }) => {
      console.log(basket, "basjet")
    return(
      <div style={{ position: "relative" }}>
      <div className="basket-container">
        <button className="basket-icon-button">
          <img alt="logo" className="basket-icon" src={BasketIcon} />
          <span className="basket-icon-button-text">
            Sepetim
          </span>
        </button>
        {basket && basket.length > 0 && 
          <div className="basket-icon-length">
            {basket.length}
          </div>
        }
      </div>
      {basket && basket.length > 0 && 
          <div className="basket-popover">
            <div className="basket-popover-header">
               {basket && basket.map(bask => {
                 return (
                   <div style= {{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "100%", color: "#fff", flexDirection: "column", height:"auto"}}>
                     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around",  width: "100%"}}>
                        <div>
                          {bask.title}
                        </div>
                        <div>
                          {bask.price} TL
                        </div>
                        </div>
                        
                    </div>
                 )
               })}
               <div className="product-card-container-body-button">
                  <button onClick={() => productCardOnClick(basket)} className="product-card-button">
                     <span>Sipariş ver</span>
                  </button> 
                </div>
            </div>
          </div>
        }
      </div>
    )}}
  </BasketContainer>
);

export default Basket;
