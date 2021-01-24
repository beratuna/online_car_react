import React from 'react';

export default function Roadside() {

  return(
    <div>
      <h2>Roadside Assistance</h2>
      
      <div class="flex-container h-300 align-items-center justify-content-space-between flex-direction-row">
        <div class="width-50">
          <img class="width-60" src={require('./warning.png')} />
        </div>
        <div class="width-80">
          <p class="blink">
            Please call for assistance.
          </p>
          <p class="font-20">
            Phone: 000000000
          </p>
        </div>
        <div class="width-50">
          <img class="width-60" src={require('./warning.png')} />
        </div>
      </div>
    </div>
    
  );
}