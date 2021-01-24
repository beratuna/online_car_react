import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

export default function Dashboard() {

  return(
    <div>
        <h2>Dashboard</h2>
        <div class="col-xs-3">
            <Link to="/roadside"><button class='btn btn-success'>
                Roadside Assistance
            </button>&nbsp;&nbsp;&nbsp; 
            </Link>
            <Link to="/showroom"><button class='btn btn-success'>
                Nearest Showrooms
            </button>&nbsp;&nbsp;&nbsp; 
            </Link>
            <Link to="/reservation"><button class='btn btn-success'>
                Request Reservation
            </button>&nbsp;&nbsp;&nbsp; 
            </Link>
            <Link to="/carStatus"><button class='btn btn-success'>
                Monitor Car Status
            </button>
            </Link>
        </div>
    </div>
  );
}