import React, { useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import { signUpUser } from '../../services/users';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
    } catch {
      setErrorMessage('Something is not correct. Try Again.');
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
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
