
import React, { useState } from 'react';
// import { Redirect } from "react-router-dom"; 

export default function ServiceAppointment() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [plateNumber, setPlateNumber] = useState();
    const [date, setDate] = useState();
    const [showroom, setShowroom] = useState();
    const [maintenance, setMaintenance] = useState();
    const [faultWarning, setFaultWarning] = useState();
    const [accessoryAssembly, setAccessoryAssembly] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      console.log(name);
      console.log(surname);
      console.log(phone);
      console.log(email);
      console.log(plateNumber);
      console.log(date);
      console.log(showroom);
      console.log(maintenance);
      console.log(faultWarning);
      console.log(accessoryAssembly);
    }
  
    return(
      <div>
        <h2>Service Appointment</h2>
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
                <input class="theInputs" type="date"  onChange={e => setDate(e.target.value)} />
            </label>
          </div>

          
          <div class="column">
            <label class="theLabels">
            <span class="float-left">Showroom:  </span>
              <select class="theInputs" required defaultValue={'DEFAULT'} onChange={e => setShowroom(e.target.value)}>
                <option value="DEFAULT" disabled>Choose city ...</option>
                <option value="ankara">Ankara</option>
                <option value="istanbul">İstanbul</option>
                <option value="izmir">İzmir</option>
              </select>
            </label>
          </div>
          
          <div class="column">
            <label class="theLabels">
            <span class="float-left">Maintenance: </span>
              <input class="theInputs m-t-7" type="checkbox" onChange={e => setMaintenance(e.target.checked)} />
            </label>
          </div>
          
          <div class="column">
            <label class="theLabels">
            <span class="float-left">Fault Warning: </span>
              <input class="theInputs m-t-4" type="checkbox" onChange={e => setFaultWarning(e.target.checked)} />
            </label>
          </div>


          <div class="column">
            <label class="theLabels">
            <span class="float-left">Accessory Assembly: </span>
              <input class="theInputs m-t-18" type="checkbox" onChange={e => setAccessoryAssembly(e.target.checked)} />
            </label>
          </div>

          <div class="column">
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </div>
        </form>
      </div>
    )
  }
