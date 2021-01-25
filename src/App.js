import React, { useCallback, useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import withLoading from './hoc/withLoading';
import { Col } from 'react-bootstrap';
import Personnel from './components/Personnel/Personnel';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Receptionist from './components/Receptionist/Receptionist';
import Manager from './components/Manager/Manager';
import Dashboard from './components/Dashboard/Dashboard';
import CarStatus from './components/CarStatus/CarStatus';
import Roadside from './components/Roadside/Roadside';
import Showroom from './components/Showroom/Showroom';
import PriceOffer from './components/PriceOffer/PriceOffer';
import ServiceAppointment from './components/ServiceAppointment/ServiceAppointment';
import useToken from './useToken';

const ComponentWithLoading = withLoading(Col);

const App = () => {
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();

  const logoutRequest = useCallback(async () =>{
    sessionStorage.clear();
    console.log("logoiut");
    window.location.reload(false);

  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <div class="flex-container justify-content-space-between flex-direction-row">
        <div>        
          <Link to="/dashboard"><button class='btn btn-success'>
              Home
            </button>
          </Link>
        </div>     
        <div class="width-80"> 
          <Redirect from="/" to="/dashboard" />
          <Switch>
            <Route path="/dashboard" >
              <Dashboard/>
            </Route>
            <Route path="/personnel" >
              <Personnel token={token} setToken={setToken}/>
            </Route>
            <Route path="/login" >
              <Login setToken={setToken} />
            </Route>
            <Route path="/receptionist" >
              <Receptionist token={token} setToken={setToken}/>
            </Route>
            <Route path="/manager" >
              <Manager token={token} setToken={setToken}/>
            </Route>
            <Route path="/carStatus" >
              <CarStatus/>
            </Route>
            <Route path="/roadside" >
              <Roadside/>
            </Route>  
            <Route path="/showroom" >
              <Showroom/>
            </Route>        
            <Route path="/serviceAppointment" >
              <ServiceAppointment/>
            </Route>   
            <Route path="/priceOffer" >
              <PriceOffer/>
            </Route>   
            </Switch>
          </div>

        <div>
          <div>
            <Link to="/personnel"><button class='btn btn-success'>
                Personnel Login
              </button>
            </Link>
          </div>
          <div>
            <Link to="/dashboard"><button class='btn btn-success' onClick={logoutRequest}>
                Personnel Logout
              </button>
            </Link>
          </div>
          
        </div>
      </div>
      </BrowserRouter>

    </div>
  );
};

export default App;
