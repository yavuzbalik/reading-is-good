/* eslint-disable */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from '../../../history';

// Actions
import { setCategory } from '../../../redux/action'

const AddCategoryContainer = ({ children, setCategory }) => {
  const [openNewCategory, setOpenNewCategory] = useState(false)
  const [categoryName, setCategoryName] = useState("")

  const _openNewList = (e, item) => {
    e.preventDefault()
    setOpenNewCategory(item)
   }
  
   const _addCategory = async (e) => {
    e.preventDefault()
    setOpenNewCategory(false)
    await setCategory(categoryName)
  }
 
  return children && 
    children({ 
      openNewCategory, 
      openNewList: _openNewList, 
      setCategoryName, 
      handleClickAddCategory: _addCategory 
    });
};

AddCategoryContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setCategory,
};

export default connect(null, mapDispatchToProps)(AddCategoryContainer);
