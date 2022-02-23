/* eslint-disable */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from '../../../history';

// Actions
import { setItem } from '../../../redux/action'

const AddItemContainer = ({ children, setItem, category }) => {
  const [openNewItem, setOpenNewItem] = useState({opened: true, category: 0})
  const [itemName, setItemName] = useState("")

  const _openNewTodo = (e, item, category) => {
    e.preventDefault()
     setOpenNewItem({opened: item, category})
   }

   const _handleClickAddTodo = async (e, category) => {
    e.preventDefault()
    await setItem(category, itemName, "uncompleted")
    setOpenNewItem({opened: true, category: 0})
 }
  

 
  return children && 
    children({ 
      openNewItem,
      openNewTodo:_openNewTodo,
      setItemName,
      handleClickAddTodo: _handleClickAddTodo
    });
};

AddItemContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setItem,
};

export default connect(null, mapDispatchToProps)(AddItemContainer);
