/* eslint-disable */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Selectors
import { isLoadingSelector, productsSelector, getCategoryIdSelector, searchInputSelector } from '../../../redux/selectors';

// Actions
import { getProductList } from '../../../redux/action';

// Constants
import { ROUTES } from '../../../config/routes';

const ApplicationContainer = ({ children, getProductList, products, isLoading, categoryId, search }) => {
  const [routes] = useState(ROUTES);
  useEffect(() => {
    async function fetchData() {
      await setTimeout(() => getProductList(search), 500);
    }
    fetchData();
  }, [categoryId]);
  console.log(search, "search")
console.log = function() {}
  return (
    children &&
    children({
      routes,
      products,
      isLoading,
    })
  );
};

ApplicationContainer.propTypes = {
  children: PropTypes.func.isRequired,
  getProductList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  products: productsSelector(state),
  categoryId: getCategoryIdSelector(state),
  search: searchInputSelector(state),
});

const mapDispatchToProps = {
  getProductList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
