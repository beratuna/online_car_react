import React, { useState } from 'react';

export default function Showroom() {
  const [showroom, setShowroom] = useState();

  return(
    <div>
      <h2>Showrooms</h2>
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
      <div>
        <div>
          {showroom == 'ankara' &&
            <div class="flex-container flex-direction-row align-items-center">
              <div class="div-border m-r-10">
                <p><b>Showroom X</b></p>
                <p>Adress:</p>
                <p>Phone:</p>
              </div>
              <div class="div-border m-r-10">
                <p><b>Showroom Y</b></p>
                <p>Adress:</p>
                <p>Phone:</p>
              </div>
              <div class="div-border">
              <p><b>Showroom Z</b></p>
                <p>Adress: </p>
                <p>Phone:</p>
              </div>
            </div>           
          }
        </div>
        <div>
          {showroom == 'istanbul' &&
            <div class="flex-container flex-direction-row align-items-center">
            <div class="div-border m-r-10">
              <p><b>Showroom A</b></p>
              <p>Adress: </p>
              <p>Phone: </p>
            </div>
            <div class="div-border m-r-10">
              <p><b>Showroom B</b></p>
              <p>Adress: </p>
              <p>Phone:</p>
            </div>
          </div>    
          }
        </div>
        <div>
          {showroom == 'izmir' &&
            <div class="flex-container  align-items-center">
            <div class="div-border m-r-10">
              <p><b>Showroom C</b></p>
              <p>Adress: </p>
              <p>Phone:</p>
            </div>
          </div>  
          }
        </div>
      </div>
    </div>
  );
}