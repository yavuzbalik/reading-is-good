/* eslint-disable */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { history } from '../../../history';

const LogoutContainer = ({ children }) => {
  
  const _handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userToken');
    history.push("/login")
  }

  return children && children({ handleLogout: _handleLogout });
};

LogoutContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default LogoutContainer
