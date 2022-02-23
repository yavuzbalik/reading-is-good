/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import '../pages/application/styles/applicationStyles.scss';

// Components
import { Header, Footer } from '../components';

const PrivateLayout = ({ children }) => {
    return (
        <div className='private-layout'>
            <Header />
            <div className="body-title-container">
            <h1 className="body-title">Deloitte</h1>
            </div>
            <div className="body">
                {children}
            </div>
            <Footer />
        </div>
    );
}

PrivateLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateLayout;
