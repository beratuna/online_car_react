
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
        <h1>Price Offering</h1>
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
            <span>Price Interval: </span>
              <input type="number" class="m-r-10" placeholder="Min" onChange={e => setMinPrice(e.target.value)} />
              <input type="number" placeholder="Max" onChange={e => setMaxPrice(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
            <span>Car model:  </span>
              <select required defaultValue={'DEFAULT'} onChange={e => setCarModel(e.target.value)}>
                <option value="DEFAULT" disabled>Choose car model ...</option>
                <option value="lion">Lion</option>
                <option value="elephant">Elephant</option>
                <option value="cat">Cat</option>
              </select>
            </label>
          </div>

          
          <div>
            <label>
            <span>City:  </span>
              <select required defaultValue={'DEFAULT'} onChange={e => setCity(e.target.value)}>
                <option value="DEFAULT" disabled>Choose city ...</option>
                <option value="ankara">Ankara</option>
                <option value="istanbul">İstanbul</option>
                <option value="izmir">İzmir</option>
              </select>
            </label>
          </div>
          
          <div>
            <label>
            <span>Zoom option: </span>
              <input type="checkbox" onChange={e => setZoomOption(e.target.checked)} />
            </label>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
