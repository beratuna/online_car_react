import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

export default function Dashboard() {

  return(
    <div>
        <h2>Showroom</h2>
        <div class="flex-container h-300 align-items-center justify-content-center flex-direction-row">
            <div class="col-xs-4 m-r-10">            
                <Link to="/roadside"><button class='btn btn-success btn-lg'>
                Roadside Assistance
                </button>
                </Link>
            </div>
            <div class="col-xs-4 m-r-10">
            <Link to="/showroom"><button class='btn btn-success btn-lg'>
                Nearest Showrooms
            </button>
            </Link>
            </div>

            <div class="col-xs-4 m-r-10">
            <Link to="/serviceAppointment"><button class='btn btn-success btn-lg'>
                Service Appointment
            </button>
            </Link>
            </div>

            <div class="col-xs-4 m-r-10">
            <Link to="/priceOffer"><button class='btn btn-success btn-lg'>
                Price Offering
            </button>
            </Link>
            </div>

            <div class="col-xs-4">
            <Link to="/carStatus"><button class='btn btn-success btn-lg'>
                Monitor Car Status
            </button>
            </Link>
            </div>
        </div>
        <div class="flex-container"> 
            <div class="width-50">
                <img class="width-80" src={require('./cat.jpg')} />
            </div>
            <div class="width-50 m-t-5">
                <img class="width-90" src={require('./lion.jpg')} />
            </div>
            <div class="width-50 m-t-6">
                 <img class="width-80" src={require('./elephant.png')} />
            </div>
        </div>
    </div>
  );
}