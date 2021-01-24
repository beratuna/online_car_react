import React from 'react';
import Login from '../Login/Login';

export default function Receptionist({token, setToken}) {

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <h2>Receptionist</h2>
  );
}