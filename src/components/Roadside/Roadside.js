import React from 'react';

export default function Roadside() {

  return(
    <div>
      <h2>Roadside Assistance</h2>
      
      <div class="flex-container h-300 align-items-center justify-content-space-between flex-direction-row auto-height">
        <div class="width-50">
          <img class="width-60" src={require('./warning.png')} />
        </div>
        <div class="width-80">
          <p class="blink">
            Please call for assistance.
          </p>
          <p class="font-20">
            24/7 professional support 
          </p>
          <p class="font-20">
            Sending a mechanic to the accident or breakdown site
          </p>
          <p class="font-20">
            Repairing/towing the vehicle
          </p>
          <p class="font-20">
            Providing a replacement vehicle
          </p>
          <p class="font-20">
            Following up repairs
          </p>
          <p class="font-20">
            Phone: <u>(0312) 378 38 38</u>
          </p>
        </div>
        <div class="width-50">
          <img class="width-60" src={require('./warning.png')} />
        </div>
      </div>
    </div>
    
  );
}