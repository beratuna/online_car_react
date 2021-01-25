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
            <div class="flex-container flex-direction-row align-items-center justify-content-center">
              <div class="div-border m-r-10 font-25">
                <p><b>Showroom X</b></p>
                <p><b>Adress:</b> Kızılırmak, Mevlana Blv. No:148/A, 06520 Çankaya/Ankara</p>
                <p><b>Phone:</b> (0312) 378 38 38</p>
              </div>
            </div>           
          }
        </div>
        <div>
          {showroom == 'istanbul' &&
            <div class="flex-container flex-direction-row align-items-center justify-content-center">
            <div class="div-border m-r-10 font-25">
              <p><b>Showroom Y</b></p>
              <p><b>Adress:</b> Maltepe, Eski Londra Asfaltı Cd. No:1, 34010 Zeytinburnu/İstanbul</p>
              <p><b>Phone:</b> (0212) 449 13 33</p>
            </div>
          </div>    
          }
        </div>
        <div>
          {showroom == 'izmir' &&
            <div class="flex-container flex-direction-row align-items-center justify-content-center">
            <div class="div-border m-r-10 font-25">
              <p><b>Showroom Z</b></p>
              <p><b>Adress:</b> Adalet, Anadolu Cd. No:29, 35530 Bayraklı/İzmir</p>
              <p><b>Phone:</b> (0232) 498 88 00</p>
            </div>
          </div>  
          }
        </div>
      </div>
    </div>
  );
}