/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginPageContainer from '../container/loginPageContainer';
import DeloitteIcon from '../../../assets/images/deloitte_logo.png'
import { history } from '../../../history';
import '../style/loginPageStyles.scss'

const LoginPage = () => {
return(
    <LoginPageContainer>
    {({ 
        inputRef,
        handleSubmit,
        changeUserName,
        changePassword,
        loggingIn,
        loginError
     }) => {
    return(
        <div className='login-container'>
          <div className='login'>
              <img alt="logo" className="deloitte-icon" src={DeloitteIcon} />
              <form name="form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label>Kullanıcı Adı</label>
                  <input
                    type="text"
                    name="username"
                    placeholder=" "
                    onChange={e => changeUserName(e.target.value)}
                    ref={inputRef}
                    autoComplete="on"
                  />
                </div>
                <div>
                  <label>Şifre</label>
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    onChange={e => changePassword(e.target.value)}
                    autoComplete="on"
                  />
                  </div>
                  {loginError && <p className='help-block'>Kullanıcı adı yada şifre hatalı. Lütfen tekrar deneyin!</p>}
                <button type="submit" className="login-button">
                  {loggingIn ? <div className="loadingSpinner"/> : "Giriş"}
                </button>
              </form>
              <div>
                <button onClick={() => history.push("/register")} type="submit" className="login-text-button">
                  Kaydol
                </button>
              </div>
            </div>
        </div>
      )}}
    </LoginPageContainer>
);
}
export default LoginPage;
