import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import FormWithHook from './components/FormWithHook';
import Form from './components/Form';
import withLoading from './hoc/withLoading';
import { Col } from 'react-bootstrap';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';

const ComponentWithLoading = withLoading(Col);

const App = () => {
  const [resultWithHook, setResultWithHook] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();
  

  const calculateResultWithHook = (first, second) => {
    setResultWithHook(first + second*2);
  };
  const calculateResult = (first, second) => {
    setResult(first + second);
  };

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" >
            <Dashboard token={token} setToken={setToken}/>
          </Route>
          <Route path="/form" >
            <Form token={token} />
          </Route>
        </Switch>
      </BrowserRouter>

      {/* <Form onSubmit={calculateResult} />
      <p>
        { 'Result = ' }
        <code>{result}</code>
      </p>
      <ComponentWithLoading loading={loading} />
      <div className="col-sm-12">
        <button onClick={loading ? stopLoading : startLoading} className="btn btn-primary">{loading ? 'stop' : 'start'}</button>
      </div>
      <FormWithHook onSubmit={calculateResultWithHook} />
      <p>
        { 'Result = ' }
        <code>{resultWithHook}</code>
      </p> */}
    </div>
  );
};

export default App;
