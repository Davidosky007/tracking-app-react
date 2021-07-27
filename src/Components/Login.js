import { Redirect, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../logic/sessions';
import { saveToken } from '../logic/storage';

const Login = () => {
  const [redirect, setRedirect] = useState();
  const [error, setError] = useState();

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const signUp = path !== 'login';
  const submitValue = signUp ? 'Sign Up' : 'Login';
  const endpoint = signUp ? 'users' : 'login';
  const validatePassword = signUp ? <input className="field m-b-20 background-blue color-white" id="rPassword" type="password" placeholder="reapeat password" /> : <div />;
  const link = signUp ? <a href="/users/login">Login</a> : <a href="/users/sign-up">Sign Up</a>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.parentElement[0].value;
    const password = e.target.parentElement[1].value;
    const rPassword = e.target.parentElement[2].value;
    if (signUp && password !== rPassword) return;
    const response = await login(name, password, endpoint);
    if (response.token) {
      saveToken(response.token);
      setRedirect(<Redirect to={{ pathname: '/' }} />);
    } else {
      setError(<div className="m-b-20">{response.error}</div>);
    }
  };

  return (
    <div className="login text-center">
      {redirect}
      {error}
      <form>
        <input className="field m-b-20 background-blue color-white" id="name" type="text" placeholder="username" />
        <input className="field m-b-20 background-blue color-white" id="password" type="password" placeholder="password" />
        {validatePassword}
        <input className="login-btn background-gray m-b-30" type="submit" value={submitValue} onClick={(e) => handleSubmit(e)} />
      </form>
      <p>or </p>
      {link}
    </div>
  );
};

export default Login;
