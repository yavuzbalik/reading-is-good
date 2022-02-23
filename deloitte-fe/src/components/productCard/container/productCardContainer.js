/* eslint-disable */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { setBasket, removeBasket } from '../../../redux/action';

// Selectors
import { getBasketSelector } from '../../../redux/selectors';

const ProductCardContainer = ({ children, setBasket, removeBasket, basket }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(basket.length <= 0) {
      setCount(0)
    }
    }, [basket]);
  
  const _productCardOnClick = (product) => {
    setCount(1)
    setBasket(product)
  }

  const _productCardMinusPlusOnClick = (type, product) => {
    if(type === "decrease") {
      setCount(count - 1 )
      removeBasket(product.title)
    }

    if(type === "increase") {
      setCount(count + 1 )
      setBasket(product)
    }
    
  }

  return children && children({ count, productCardOnClick: _productCardOnClick, productCardMinusPlusOnClick: _productCardMinusPlusOnClick });
};

ProductCardContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  basket: getBasketSelector(state),
});

const mapDispatchToProps = {
  setBasket,
  removeBasket
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductCardContainer);;
