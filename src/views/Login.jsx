import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { signInUser, signUpUser } from '../services/users';

export default function Login({ setUser }) {
  const [type, setType] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Login') {
        resp = await signInUser(email, password);
        console.log('logging in');
        history.replace('/profile');
        window.location.reload();
      } else {
        resp = await signUpUser(email, password);
        setUser(resp);
        history.push('/confirm-email');
      }
    } catch {
      setErrorMsg('error with login');
    }
  };
  return (
    <div>
      <h1>{type}</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMsg={errorMsg}
        handleSubmit={handleSubmit}
      />
      <button
        onClick={() => {
          setType('Sign Up');
        }}
        className={classNames({ active: type === 'Sign Up' })}
      >
        Sign Up
      </button>
    </div>
  );
}
