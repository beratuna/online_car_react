import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';

async function loginUser(credentials) {
 return axios.post(process.env.REACT_APP_backend_url + 'user/login', {
    ...credentials
 })
   .then(res => res.data)
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [usertype, setUserType] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
      usertype
    });
    setToken(token);
    console.log(token);
  }

  return(
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>

      <div class="column">
            <label class="theLabels">
            <span  class="float-left">Type: </span>
              <select class="theInputs" required defaultValue={'DEFAULT'} onChange={e => setUserType(e.target.value)}>
                <option value="DEFAULT" disabled>Choose personnel type ...</option>
                <option value="receptionist">Receptionist</option>
              <option value="manager">Manager</option>
              </select>
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
              <span class="float-left">Username: </span>
              <input class="theInputs" type="text" required onChange={e => setUserName(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Password: </span>
              <input class="theInputs" type="text" required onChange={e => setPassword(e.target.value)} />
            </label>
          </div>
          <div class="column">
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};