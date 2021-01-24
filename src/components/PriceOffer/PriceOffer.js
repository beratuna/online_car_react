
import React, { useState } from 'react';
// import { Redirect } from "react-router-dom"; 

export default function PriceOffer() {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [carModel, setCarModel] = useState();
    const [city, setCity] = useState();
    const [zoomOption, setZoomOption] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      console.log(name);
      console.log(surname);
      console.log(phone);
      console.log(email);
      console.log(minPrice);
      console.log(maxPrice);
      console.log(carModel);
      console.log(city);
      console.log(zoomOption);
    }
  
    return(
      <div>
        <h2>Price Offering</h2>
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
            <span  class="float-left">Price Interval: </span>
            <div class="theInputs">
              <input type="number" class="m-r-10" placeholder="Min" onChange={e => setMinPrice(e.target.value)} />
              <input type="number"  class="m-t-7" placeholder="Max" onChange={e => setMaxPrice(e.target.value)} />
              </div>
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
            <span  class="float-left">Zoom option: </span>
              <input class="theInputs m-t-7" type="checkbox" onChange={e => setZoomOption(e.target.checked)} />
            </label>
          </div>

          <div>
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
          </div>
        </form>
      </div>
    )
  }
