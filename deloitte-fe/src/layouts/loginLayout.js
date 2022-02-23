/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const LoginLayout = ({ children }) => (
    <>
        {children}
    </>
)

LoginLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LoginLayout;
