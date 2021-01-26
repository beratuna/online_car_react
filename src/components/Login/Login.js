import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

async function loginUser(credentials) {
 return axios.post(process.env.REACT_APP_backend_url + 'user/login', {
    ...credentials
 })
   .then(res => res.data)
   .catch(error => error.response);
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [usertype, setUserType] = useState();
  const [loginStatus, setLoginStatus] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const token = await loginUser({
        username,
        password,
        usertype
      });
      if(token && token.status != 401){
        setLoginStatus(true);
        setToken(token);
      } else{
        setLoginStatus(false);
      }
    } catch(err){
      console.log(err);
    };
    
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
              <input class="theInputs" type="password" required onChange={e => setPassword(e.target.value)} />
            </label>
          </div>
          {/* <div class="column">
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </div> */}
          <Popup trigger={<button type="submit" class="btn btn-info btn-sm">Submit</button>} modal>
            {loginStatus==false && <span class="font-20 font-color-red">Login failed.  &#215;</span>}
            {loginStatus==true && <span class="font-20 font-color-red">Login successful.  &#10003;</span>}
          </Popup>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};