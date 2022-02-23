/* eslint-disable */
import React from 'react';
import CardContainer from '../container/cardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

// Components
import '../style/cardStyles.scss';

const Card = ({ openItemModal, todo, category, index }) => (
  <CardContainer>
      <div key={`${index}-${todo.item}`} onClick={() => openItemModal(todo, category)} className={`card-container ${todo.status === "completed" && "done"}`}>
        <div>
            {todo.item}
        </div>
        <div className='card-container-done'>
            {todo.status === "uncompleted" ? "Tamamlanmadı" : "Tamamlandı"}
        </div>
      </div>
  </CardContainer>
);

export default Card;
