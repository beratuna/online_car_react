import React, { useState } from 'react';

export default function CarStatus() {
    const [trackId, setTrackId] = useState();
    const handleSubmit = async e => {
      }

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <h2>CarStatus</h2>
           <div class="column">
            <label class="width-57">
              <span class="float-left">Car Status Track Number: </span>
              <input class="theInputs" type="text" required onChange={e => setTrackId(e.target.value)} />
            </label>
          </div>
          <div>
            <button type="submit" class="btn btn-info btn-sm">Submit</button>
        </div>
        </form>
    </div>
  );
}