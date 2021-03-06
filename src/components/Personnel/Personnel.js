import React from 'react';
import Login from '../Login/Login';
import { Redirect } from "react-router-dom"; 

export default function Personnel({token, setToken}) {

  if(!token) {
    return <Login setToken={setToken} />
  }
  else if(token.usertype == "receptionist"){
    return <Redirect to='/receptionist'/>
  }
  else if(token.usertype == "manager"){
    return <Redirect to='/manager'/>
  }
  console.log(token);
  return(
    <h2>Personnel</h2>
  );
}