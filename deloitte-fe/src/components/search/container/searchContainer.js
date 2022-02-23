/* eslint-disable */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Selectors
import { searchInputSelector, getCategoryIdSelector } from '../../../redux/selectors';

// Actions
import { getSearch, getProductList } from '../../../redux/action';

const SearchContainer = ({ children, search, getSearch, getProductList, categoryId }) => {

  const _onChange = (e) => {
    getSearch(e)
    if(e.length > 2) {
      getProductList(e)
    }

    if(e.length < 3) {
      getProductList("")
    }
  }

  const _searchButtonOnClick = () => {
    getProductList(search)
  }

  return children && children({ search, onChange: _onChange, searchButtonOnClick: _searchButtonOnClick });
};

SearchContainer.propTypes = {
  children: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};


const mapStateToProps = (state) => ({
  search: searchInputSelector(state),
  categoryId: getCategoryIdSelector(state),
});

const mapDispatchToProps = {
  getSearch,
  getProductList
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);