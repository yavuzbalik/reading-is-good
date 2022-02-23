/* eslint-disable */
import React from 'react';
import CategoryContainer from '../container/categoryContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus , faTimes} from '@fortawesome/fontawesome-free-solid';

// Components
import { Modal, Card, AddItem } from '../../'
import '../style/categoryStyles.scss';

const Category = ({ categories, todos }) => (
  <CategoryContainer categories={categories} todos={todos}>
    {({ 
        setCategoryUpdatedName,
        removeSelectedCategory,
        updated, 
        openItemModal, 
        itemModalVisible, 
        closeItemModal,
        itemModalChildren,
    }) => {
    return (
      <>
        {categories.length > 0 && _.orderBy(categories, ['uuid'],['asc']).map((category, index) => (   
          <div key={`${index}-${category.uuid}`} className='category-list-container'>
              <div  style={{ display: "flex", alignItems: "center"}}>
                  <div className='category-title-container'>
                      <input
                          type="text"
                          name="categoryName"
                          placeholder=" "
                          onChange={(e) => setCategoryUpdatedName(e.target.value,category.uuid)}
                          autoComplete="on"
                          value={category.item}
                          className='category-title-input'
                      />
                  {updated && <div className='loader-card'/>}
                  </div>
                  <div style={{ marginLeft: 10}} onClick={() => removeSelectedCategory(category.uuid)}>
                      <FontAwesomeIcon className="trash-icon" icon={faTrash} />
                  </div>
              </div>
              {todos && todos.length > 0 && todos.map((todo, index) => {
                  if(todo.category_id === category.uuid){
                  return (
                    <Card key={index} openItemModal={openItemModal} todo={todo} category={category} index={index} />
                  )}
              })}
              <Modal visible={itemModalVisible} closeModal={() => closeItemModal()} children={itemModalChildren}/>
              <AddItem index={index} category={category} />
          </div>
        ))}
      </>
    )}}
  </CategoryContainer>
);

export default Category;
