/* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';

// Selectors
import { registeringInInSelector, registerError } from '../../../redux/selectors';

// Actions
import { register } from '../../../redux/action';

const RegisterPageContainer = ({ children, register, registeringIn, registerError }) => {

  const [submitted, setSubmitted] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {

      inputRef.current.focus();

    }, [inputRef]);

    const _handleOnSubmit = async (e) => {    
        e.preventDefault();
        setSubmitted(true);
        await register(username, password);
    };

    const _changeUserName = (e) => {
        setUserName(e)
    }

    const _changePassword = (e) => {
        setPassword(e)
    }

    const _changeEmail = (e) => {
      setEmail(e)
  }

  return children && 
  children({ 
    handleSubmit: _handleOnSubmit,
    changeUserName: _changeUserName,
    changePassword: _changePassword,
    changeEmail: _changeEmail,
    submitted,
    username,
    password,
    inputRef,
    registeringIn,
    registerError
  });
};

RegisterPageContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  registeringIn: registeringInInSelector(state),
  registerError: registerError(state),
});

const mapDispatchToProps = {
  register,
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPageContainer));
