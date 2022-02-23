/* eslint-disable */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { history } from '../../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import { faTrash } from '@fortawesome/fontawesome-free-solid';
import '../style/categoryStyles.scss';

//Actions
import { updateCategory, deleteCategory, updateItem, deleteItem } from '../../../redux/action'

//Selector
import { categoryUpdatedNameSelector } from '../../../redux/selectors'

const options = [
  { value: 'uncompleted', label: 'Tamamlanmadı' },
  { value: 'completed', label: 'Tamamlandı' },
];

const CategoryContainer = ({ children, updateCategory, deleteCategory, updateItem, deleteItem, updated, categories, todos }) => {
  const [itemModalVisible, setItemModalVisible] = useState("none");
  const [itemModalChildren, setItemModalChildren] = useState(null);
  const [modalItem, setModalItem] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let tempData = []
      categories && categories.forEach(category => {
        tempData.push({value: category.uuid, label: category.item})
     })

     setCategoryOptions(tempData)

    }
    fetchData();
  }, [categories]);

  const _openItemModal = async (todo, category) => {
    setItemModalVisible("block")
    await setItemModalChildren(null)
    setSelectedOption(todo.status)
    
    const modalData = (
      <>
      <form onSubmit={(e) => _updateTodo(e)} >
          <div className='item-modal-container'>
            <div className='item-modal-container-item'>
              <div>
              <input
                  type="text"
                  name="categoryName"
                  placeholder=" "
                  onChange={e => updateItem(e.target.value, todo.uuid)}
                  autoComplete="on"
                  defaultValue={todo.item}
              />
            </div>
            <div 
              className='item-modal-container-item-remove'
              onClick={() => {
                deleteItem(todo.uuid)
                _closeItemModal()
              }}>
               <FontAwesomeIcon className="trash-icon" icon={faTrash} />
            </div>
            </div>
            <div className='item-modal-container-status'>
              Durum: 
              <div className='item-modal-container-select-container'>
              <Select
                className='item-modal-container-select'
                onChange={e => updateItem(todo.item, todo.uuid,e.value)}
                options={options}
                placeholder={todo.status === "uncompleted" ? "Tamamlanmadı": "Tamamlandı"}
              />
              </div>
            </div>
            <div className='item-modal-container-move'>
              Taşı: 
              <div className='item-modal-container-move-select-container'>
              <Select
                className='item-modal-container-move-select'
                onChange={e => updateItem(todo.item, todo.uuid,todo.status, e.value)}
                options={categoryOptions}
                placeholder={todo.category}
              />
              </div>
            </div>
          </div>
          </form>
          </>
    )
    setItemModalChildren(modalData)
  }


  const _closeItemModal = () => {
    setItemModalVisible("none")
  }

  const _updateTodo = async (e) => {
    e.preventDefault()
    setItemModalVisible("none")
  }

  const _setCategoryUpdatedName = (e, categoryId) => {
    updateCategory(e,categoryId);
  }

  const _removeSelectedCategory = (categoryId) => {
    deleteCategory(categoryId)
  }

  return children && 
  children({  
    updated,
    itemModalVisible,
    itemModalChildren,
    setCategoryUpdatedName: _setCategoryUpdatedName,
    removeSelectedCategory: _removeSelectedCategory,
    closeItemModal: _closeItemModal,
    openItemModal: _openItemModal,
  });
};

CategoryContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  updated: categoryUpdatedNameSelector(state),
});


const mapDispatchToProps = {
  updateCategory,
  deleteCategory,
  updateItem,
  deleteItem
};

export default connect(null, mapDispatchToProps)(CategoryContainer);
