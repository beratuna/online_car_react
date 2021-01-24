import React, { useState } from 'react';

import axios from 'axios';

async function monitorStatus(id) {
 return axios.post('http://localhost:8080/user/trackId', {
    ...id
 })
   .then(res => res.data)
}

export default function CarStatus() {
    const [trackId, setTrackId] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await monitorStatus({
            trackId
        });
      }

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <h2>CarStatus</h2>
            <div>
                <label>
                    <p>Car Track Id</p>
                    <input type="text" onChange={e => setTrackId(e.target.value)} />
                </label>
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}