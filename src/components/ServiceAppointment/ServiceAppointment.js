
import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

async function requestService(info) {
 return axios.post(process.env.REACT_APP_backend_url + 'customer/requestService', {
    ...info
 })
   .then(res => res.data)
}
export default function ServiceAppointment() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [plateNumber, setPlateNumber] = useState();
    const [date, setDate] = useState();
    const [carModel, setCarModel] = useState();
    const [city, setCity] = useState();
    const [maintenance, setMaintenance] = useState();
    const [faultWarning, setFaultWarning] = useState();
    const [accessoryAssembly, setAccessoryAssembly] = useState();
    const [appInfo, setAppInfo] = useState();
    const handleSubmit = async e => {
      e.preventDefault();
      const app_info = await requestService({
        name,
        surname,
        phone,
        email,
        plateNumber,
        date,
        city,
        maintenance,
        faultWarning,
        accessoryAssembly,
        carModel,
        "reservationType": "service",
        "reservationStatus": "unassigned",
      });
      setAppInfo(app_info);
      console.log(appInfo);
      
    }
    var today = new Date().toISOString().slice(0, 10)
  
    return(
      <div>
        <h2>Service Appointment</h2>

        <div id="root"></div>
        
        <form onSubmit={handleSubmit}>
          <div class="column">
            <label class="theLabels">
              <span class="float-left">Name: </span>
              <input class="theInputs" type="text" required onChange={e => setName(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Surname: </span>
              <input class="theInputs" type="text" required onChange={e => setSurname(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Phone: </span>
              <input class="theInputs" type="number" required onChange={e => setPhone(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Email: </span>
              <input class="theInputs" type="text" onChange={e => setEmail(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Plate Number: </span>
              <input class="theInputs" type="text"  onChange={e => setPlateNumber(e.target.value)} />
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Date:  </span>
                <div class="theInputs">
                  <input  type="date" class="m-r-10 width-100" onChange={e => setDate(e.target.value)} />
                  {date < today && <span class="font-color-red">Selected date must be minimum today.</span>}
                </div>
            </label>
          </div>

          
          <div class="column">
            <label class="theLabels">
            <span class="float-left">City:  </span>
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
            <span  class="float-left">Car model:  </span>
              <select class="theInputs" required defaultValue={'DEFAULT'} onChange={e => setCarModel(e.target.value)}>
                <option value="DEFAULT" disabled>Choose car model ...</option>
                <option value="lion">Lion</option>
                <option value="elephant">Elephant</option>
                <option value="cat">Cat</option>
              </select>
            </label>
          </div>

          <div class="column">
            <label class="theLabels">
            <span class="float-left">Maintenance: </span>
              <input class="m-t-5 m-l-38  float-left" type="checkbox" onChange={e => setMaintenance(e.target.checked)} />
            </label>
          </div>
          
          <div class="column">
            <label class="theLabels">
            <span class="float-left">Fault Warning: </span>
              <input class="m-t-5 m-l-35  float-left" type="checkbox" onChange={e => setFaultWarning(e.target.checked)} />
            </label>
          </div>


          <div class="column">
            <label class="theLabels">
            <span class="float-left">Accessory Assembly: </span>
              <input class="m-t-5 m-l-5 float-left" type="checkbox" onChange={e => setAccessoryAssembly(e.target.checked)} />
            </label>
          </div>


          <Popup trigger={<button type="submit" class="btn btn-info btn-sm" disabled={!name || !surname || !phone || !email || !plateNumber || !date || date < today || !city || !carModel}>Submit</button>} modal>
            {appInfo == null && <span>Appointment is creating. Please wait... </span>}
            {appInfo == true && <span>Appointment is created successfully.</span>}
            {appInfo == false && <span>Appointment cannot cretaed. Failed.</span>}
          </Popup>
        </form>
      </div>
    )
  }
