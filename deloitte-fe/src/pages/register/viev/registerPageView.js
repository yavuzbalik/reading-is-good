/* eslint-disable */
import React from 'react';
import RegisterPageContainer from '../container/registerPageContainer';
import DeloitteIcon from '../../../assets/images/deloitte_logo.png'
import { history } from '../../../history';
import '../style/registerPageStyles.scss'

const RegisterPage = () => {
return(
    <RegisterPageContainer>
    {({ 
        inputRef,
        handleSubmit,
        changeUserName,
        changePassword,
        changeEmail,
        registeringIn,
        registerError
     }) => (
        <div className='register-container'>
          <div className='register'>
            <img alt="logo" className="deloitte-icon" src={DeloitteIcon} />
            <form name="form" onSubmit={(e) => handleSubmit(e)}>
            
              <div>
                <label>Kullanıcı Adı</label>
                <input
                  type="text"
                  name="username"
                  placeholder=" "
                  onChange={e => changeUserName(e.target.value)}
                  required
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
                  required
                  autoComplete="on"
                />
                </div>
                {registerError && <p className='help-block'>Lütfen bilgileri kontro ediniz!</p>}
              <button type="submit" className="register-button">
                {registeringIn ? <div className="loadingSpinner"/> : "Kaydol"}
              </button>
              <div>
                <button onClick={() => history.push("/login")} type="submit" className="register-text-button">
                  Giriş Yap
                </button>
              </div>
            </form>
            </div>
        </div>
      )}
    </RegisterPageContainer>
);
}
export default RegisterPage;
