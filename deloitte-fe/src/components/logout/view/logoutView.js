/* eslint-disable */
import React from 'react';
import LogoutContainer from '../container/logoutContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

// Components
import '../style/logoutStyles.scss';

const Header = () => (
  <LogoutContainer>
    {({ handleLogout }) => (
      <button className='logout-button' onClick={() => handleLogout()}>
        <FontAwesomeIcon className="logout-icon" icon={faSignOutAlt} />
      </button>
    )}
  </LogoutContainer>
);

export default Header;
