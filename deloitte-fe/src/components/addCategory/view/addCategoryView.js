/* eslint-disable */
import React from 'react';
import AddCategoryCategory from '../container/addCategoryContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faTimes} from '@fortawesome/fontawesome-free-solid';

// Components
import '../style/addCategoryStyles.scss';

const AddCategory = ({ categories }) => (
  <AddCategoryCategory>
      {({ 
        openNewCategory,
        openNewList,
        setCategoryName,
        handleClickAddCategory
    }) => (
      <div className={`add-list-container ${openNewCategory && "active-container"}`}>
          {!openNewCategory && 
              <div className="open-new-list"  onClick={(e) => openNewList(e,true)} >
                  <FontAwesomeIcon className="plus-icon" icon={faPlus} />   
                  {categories && categories.length === 0 && <div className='open-new-list-text'>Liste ekleyin</div>}
                  {categories && categories.length > 0 && <div className='open-new-list-text'>Başka Liste ekleyin</div>}
              </div>
          }
          {openNewCategory  && 
              <div className='category-title-container'>
              <input
                  type="text"
                  name="categoryName"
                  placeholder="Liste adı girin.."
                  onChange={(e) => setCategoryName(e.target.value)}
                  autoComplete="on"
                  className={`category-title-input ${openNewCategory && "active-input"}`}
              />
              <div className='category-title-button-container'>
                  <button onClick={(e) => handleClickAddCategory(e)} type="submit" className="category-button">
                      Liste Ekle
                  </button>
                  <div onClick={(e) => openNewList( e, false)}  type="submit" >
                      <FontAwesomeIcon className={`plus-icon ${openNewCategory && "active-icon"}`} icon={faTimes} />
                  </div>
              </div>
          </div>
          }
      </div>
      )}
  </AddCategoryCategory>
);

export default AddCategory;
