import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/images/deloitte.svg';

const HeaderContainer = ({ children }) => {
  const [logo] = useState(Logo);
  return children && children({ logo });
};

HeaderContainer.propTypes = {
  children: PropTypes.func.isRequired,
};


export default HeaderContainer
