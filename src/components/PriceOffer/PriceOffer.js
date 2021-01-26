import React, { useState } from 'react';
import axios from 'axios';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

async function requestPrice(info) {
 return axios.post(process.env.REACT_APP_backend_url + 'customer/requestPrice', {
    ...info
 })
   .then(res => res.data)
}

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
    const [appInfo, setAppInfo] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const app_info = await requestPrice({
        name,
        surname,
        phone,
        email,
        minPrice,
        maxPrice,
        carModel,
        city,
        zoomOption,
        "reservationType": "price",
        "reservationStatus": "unassigned",
      });
      setAppInfo(app_info);;
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
              <input type="number" class="m-r-10 width-100" placeholder="Min" onChange={e => setMinPrice(e.target.value)} />
              <input type="number"  class="m-t-7 width-100" placeholder="Max" onChange={e => setMaxPrice(e.target.value)} />
              {maxPrice <= minPrice && <span class="font-color-red">Maximum price must be greater than minimum price.</span>}
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
              <input class="m-t-5 m-l-38 float-left" type="checkbox" onChange={e => setZoomOption(e.target.checked)} />
            </label>
          </div>

          <Popup trigger={<button type="submit" class="btn btn-info btn-sm" disabled={!name || !surname || !phone || !email || !carModel || !city || maxPrice <= minPrice}>Submit</button>} modal>
            {appInfo == null && <span class="font-20">Offering request is creating. Please wait... </span>}
            {appInfo == true && <span class="font-20 font-color-green">Offering request is created successfully. &#10003;</span>}
            {appInfo == false && <span class="font-20 font-color-red" >Appointment cannot cretaed. Failed.  &#215;</span>}
          </Popup>
        </form>
      </div>
    )
  }
