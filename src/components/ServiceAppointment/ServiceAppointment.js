
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
        <h1>Service Appointment</h1>
        <form onSubmit={handleSubmit}>

          <div>
            <label>
              <span>Name: </span>
              <input type="text" required onChange={e => setName(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Surname: </span>
              <input type="text" required onChange={e => setSurname(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Phone: </span>
              <input type="number" required onChange={e => setPhone(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Email: </span>
              <input type="text" onChange={e => setEmail(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Plate Number: </span>
              <input type="text"  onChange={e => setPlateNumber(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Date:  </span>
                <input type="date"  onChange={e => setDate(e.target.value)} />
            </label>
          </div>

          
          <div>
            <label>
            <span>Showroom:  </span>
              <select required defaultValue={'DEFAULT'} onChange={e => setShowroom(e.target.value)}>
                <option value="DEFAULT" disabled>Choose city ...</option>
                <option value="ankara">Ankara</option>
                <option value="istanbul">İstanbul</option>
                <option value="izmir">İzmir</option>
              </select>
            </label>
          </div>
          
          <div>
            <label>
            <span>Maintenance: </span>
              <input type="checkbox" onChange={e => setMaintenance(e.target.checked)} />
            </label>
          </div>
          
          <div>
            <label>
            <span>Fault Warning: </span>
              <input type="checkbox" onChange={e => setFaultWarning(e.target.checked)} />
            </label>
          </div>


          <div>
            <label>
            <span>Accessory Assembly: </span>
              <input type="checkbox" onChange={e => setAccessoryAssembly(e.target.checked)} />
            </label>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
