/* eslint-disable */
import React from 'react';
import ProductCardContainer from '../container/productCardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/fontawesome-free-solid';
import Plus from '../../../assets/images/plus.png';
import '../style/productCardStyles.scss';

const ProductCard = ({ product }) => {
const { title, price,stock, posterUrl} = product;
return (
  <ProductCardContainer>
    {({ count, productCardOnClick, productCardMinusPlusOnClick }) => {
    return (
      <div className="product-card-container">
          <div>
            <img alt="logo" className="product-image" src={posterUrl} />
          </div>
          <div className="product-card-container-body">
            <div className="product-card-container-body-title">
                {title}
            </div>
            <div className="product-card-container-body-price">
               {price} TL
            </div>
            {count === 0 &&
              <div className="product-card-container-body-button">
                  <button onClick={() => productCardOnClick(product)} className="product-card-button">
                      <span>Sepete Ekle</span>
                  </button> 
              </div>
            }
            {count > 0 &&
              <div className="product-card-container-body-button">
                <div className="product-card-container-body-button-container">
                  <div className="product-card-container-body-button-increase-decrease" onClick={() => productCardMinusPlusOnClick("decrease", product)}>
                    <FontAwesomeIcon className="plus-minus-icon" style={{color: "#044DC3"}} icon={faMinusCircle} />
                  </div>
                      <span>{count}</span>
                  <div className="product-card-container-body-button-increase-decrease" onClick={() => productCardMinusPlusOnClick("increase", product)}>
                    <img alt="logo" className="plus-minus-icon" src={Plus} />
                  </div>

                </div>
              </div>
            }
          </div>
      </div>
    )}}
  </ProductCardContainer>
);}

export default ProductCard;
