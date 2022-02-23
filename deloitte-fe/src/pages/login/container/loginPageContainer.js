/* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';

// Selectors
import { loggingInInSelector, isLoginError } from '../../../redux/selectors';

// Actions
import { login } from '../../../redux/action';

const LoginPageContainer = ({ children, login, loggingIn, loginError }) => {

  const [submitted, setSubmitted] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {

      inputRef.current.focus();

    }, [inputRef]);

    const _handleOnSubmit = async (e) => {    
        e.preventDefault();
        setSubmitted(true);
        await login(username, password);
    };

    const changeUserName = (e) => {
        setUserName(e)
    }

    const changePassword = (e) => {
        setPassword(e)
    }

  return children && 
  children({ 
    handleSubmit: _handleOnSubmit,
    changeUserName,
    changePassword,
    submitted,
    username,
    password,
    inputRef,
    loggingIn,
    loginError
  });
};

LoginPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggingIn: loggingInInSelector(state),
  loginError: isLoginError(state),
});

const mapDispatchToProps = {
  login,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer));
