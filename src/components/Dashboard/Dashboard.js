import React from 'react';
import Login from '../Login/Login';

export default function Dashboard({token, setToken}) {

  if(!token) {
    return <Login setToken={setToken} />
  }

  return(
    <h2>Dashboard</h2>
  );
}