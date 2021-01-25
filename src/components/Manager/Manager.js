import React, { useState } from 'react';
import Login from '../Login/Login';
import axios from 'axios';

async function managerInfo(info) {
 return axios.post(process.env.REACT_APP_backend_url + 'user/managerInfo', {
    ...info
 })
   .then(res => res.data)
}

export default function Manager({token, setToken}) {
  const [city, setCity] = useState();
  const [employeeType, setEmployeeType] = useState();
  console.log(token);
  if(!token) {
    return <Login setToken={setToken} />
  }

  const handleSalesperson = async e => {
    e.preventDefault();
    const man_info = await managerInfo({
      city,
      employeeType
    });
    console.log(man_info);
  }

  return(
    <div>
      <h2>Manager</h2>
      <div>
      <form onSubmit={handleSalesperson}>
        <div class="column">
          <label class="theLabels">
          <b>Select city of employees</b>
          <span  class="float-left">City:  </span>
            <select class="theInputs" required defaultValue={'DEFAULT'} onChange={e => setCity(e.target.value)}>
              <option value="DEFAULT" disabled>Choose city ...</option>
              <option value="ankara">Ankara</option>
              <option value="istanbul">İstanbul</option>
              <option value="izmir">İzmir</option>
            </select>
          </label>
        </div>

        <div class="column">
            <label class="theLabels">
            <b>Select type of employees</b>
            <span  class="float-left">Employee Type:  </span>
              <select class="theInputs" required defaultValue={'DEFAULT'} onChange={e => setEmployeeType(e.target.value)}>
                <option value="DEFAULT" disabled>Choose employee type ...</option>
                <option value="salesperson">Salesperson</option>
                <option value="receptionist">Receptionist</option>
              </select>
            </label>
          </div>
        <div>
          <button type="submit" class="btn btn-info btn-sm">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}