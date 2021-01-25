import React, { useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table'

async function monitorStatus(id) {
 return axios.post(process.env.REACT_APP_backend_url + 'customer/trackId', {
    ...id
 })
   .then(res => res.data)
}

export default function CarStatus() {
    const [trackId, setTrackId] = useState();
    const [data, setData] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const track_info = await monitorStatus({
            trackId
        });
        console.log(track_info[0]);
        var createRowData = {
            licenceNumber: track_info[0].licenceNumber,
            model: track_info[0].model,
            plate: track_info[0].plate,
            color: track_info[0].color,
            condition: track_info[0].condition
        };
        setData([createRowData]);

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
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'LicenceNumber', field: 'licenceNumber' },
            { title: 'Model', field: 'model' },
            { title: 'Plate', field: 'plate' },
            { title: 'Color', field: 'color' },
            { title: 'Condition', field: 'condition'}
          ]}
        //   data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          data = {data}
          title="Car Information"
        />
      </div>
    </div>
  );
}