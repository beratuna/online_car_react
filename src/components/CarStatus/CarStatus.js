import React, { useState } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

async function monitorStatus(id) {
 return axios.post(process.env.REACT_APP_backend_url + 'customer/trackId', {
    ...id
 })
   .then(res => res.data)
   .catch(error => error.response);
}

export default function CarStatus() {
    const [trackId, setTrackId] = useState();
    const [data, setData] = useState();
    const [trackStatus, setTrackStatus] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const track_info = await monitorStatus({
            trackId
        });
        if(track_info && track_info.status != 401){
          console.log(track_info[0]);
          var createRowData = {
              licenceNumber: track_info[0].licenceNumber,
              model: track_info[0].model,
              plate: track_info[0].plate,
              color: track_info[0].color,
              condition: track_info[0].condition
          };
          setData([createRowData]);
          setTrackStatus(true);
        } else {
          setTrackStatus(false);
        }
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
          <Popup trigger={<button type="submit" class="btn btn-info btn-sm">Submit</button>} modal>
            {trackStatus==false && <span class="font-20 font-color-red">Track number is wrong.  &#215;</span>}
            {trackStatus==true && <span class="font-20 font-color-red">Track number is correct.  &#10003;</span>}
          </Popup>
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