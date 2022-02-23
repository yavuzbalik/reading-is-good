import React from 'react';
import HeaderContainer from '../container/headerContainer';

// Components
import { Search, Basket, Order, Logout } from '../../..';

import '../style/headerStyles.scss';

const Header = () => (
  <HeaderContainer>
    {({ logo }) => (
      <header className="header">
        <div className="header-right">
          <img alt="logo" className="logo" src={logo} />
          <Search />
        </div>
        <Basket />
        <Order />
        <Logout />
      </header>
    )}
  </HeaderContainer>
);

export default Header;
