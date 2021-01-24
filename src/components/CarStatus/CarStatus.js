import React, { useState } from 'react';

export default function CarStatus() {
    const [trackId, setTrackId] = useState();
    const handleSubmit = async e => {
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