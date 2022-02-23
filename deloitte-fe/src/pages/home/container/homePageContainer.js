/* eslint-disable */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Selectors
import { productsSelector, getCategoryIdSelector } from '../../../redux/selectors';

// Actions
import { setCategoryId } from '../../../redux/action';

const HomePageContainer = ({ children, products, categoryId, setCategoryId }) => {

  const _changeCategoryId = (id) => {
    setCategoryId(id)
  }

  return children && children({ products, categoryId, changeCategoryId: _changeCategoryId });
};

HomePageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    products: productsSelector(state),
    categoryId: getCategoryIdSelector(state)
});

const mapDispatchToProps = {
  setCategoryId,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);;
