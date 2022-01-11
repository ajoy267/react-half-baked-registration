import React, { useState } from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import { signInUser, signUpUser } from '../services/users';
import classNames from 'classnames';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something is not correct. Try Again.');
    }
  };
  return (
    <div>
      <div>
        <h3
          onClick={() => {
            setType('signin');
          }}
          className={classNames({ active: type === 'signin' })}
        >
          Sign In
        </h3>
        <h3
          onClick={() => {
            setType('signup');
          }}
          className={classNames({ active: type === 'signup' })}
        >
          Sign Up
        </h3>
      </div>
      <p>Type: {type}</p>
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
