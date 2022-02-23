/* eslint-disable */
import React from 'react';
import AddItemCategory from '../container/addItemContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faTimes} from '@fortawesome/fontawesome-free-solid';

// Components
import '../style/addItemStyles.scss';

const AddItem = ({ index, category }) => (
  <AddItemCategory category={category} >
      {({
          openNewItem,
          openNewTodo,
          setItemName,
          handleClickAddTodo
    }) => (
        <div key={index} className='add-item-container'>
            {openNewItem.opened && openNewItem.category !== category.uuid  &&
            <div className='open-new-item' onClick={(e) => openNewTodo(e,true, category.uuid)} >
                <FontAwesomeIcon className="trash-icon" style={{color: "#5e6c84"}} icon={faPlus} />
                <span className='open-new-item-title'>Kart ekle</span>
            </div>
            }
            {(openNewItem.opened && openNewItem.category === category.uuid ) &&
                <div className='item-title-container'>
                    <input
                        type="text"
                        name="categoryName"
                        placeholder="Bu kart için başlık giriniz."
                        onChange={(e) => setItemName(e.target.value)}
                        autoComplete="on"
                        className='item-title-input'
                    />
                    <div className='item-title-button-container'>
                        <button onClick={(e) => handleClickAddTodo(e, category.item)} type="submit" className="category-button">
                            Kart Ekle
                        </button>
                        <div onClick={(e) => openNewTodo( e, true, 0)}  type="submit" >
                            <FontAwesomeIcon  className="trash-icon" icon={faTimes} />
                        </div>
                    </div>
                </div>
            }
        </div>
      )}
  </AddItemCategory>
);

export default AddItem;
