import React from 'react';
import Login from '../Login/Login';

export default function Manager({token, setToken}) {

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <h2>Manager</h2>
  );
}