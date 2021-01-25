import React, { useState } from 'react';

import axios from 'axios';

async function monitorStatus(id) {
 return axios.post(process.env.REACT_APP_backend_url + 'customer/trackId', {
    ...id
 })
   .then(res => res.data)
}

export default function CarStatus() {
    const [trackId, setTrackId] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const track_info = await monitorStatus({
            trackId
        });
        console.log(track_info[0].model);
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