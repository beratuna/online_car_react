import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Form from './components/Form';
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
import Reservation from './components/Reservation/Reservation';
import useToken from './useToken';

const ComponentWithLoading = withLoading(Col);

const App = () => {
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <div class="col-xs-3">
        <Link to="/personnel"><button class='btn btn-success float-right'>
            Personnel Login
          </button>
        </Link>        
        <Link to="/dashboard"><button class='btn btn-success float-left'>
            Home
          </button>
        </Link>

        </div>
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
          <Route path="/reservation" >
            <Reservation/>
          </Route>          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
