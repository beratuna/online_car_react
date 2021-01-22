import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import FormWithHook from './components/FormWithHook';
import Form from './components/Form';
import withLoading from './hoc/withLoading';
import { Col } from 'react-bootstrap';

const ComponentWithLoading = withLoading(Col);

const App = () => {
  const [resultWithHook, setResultWithHook] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);

  const calculateResultWithHook = (first, second) => {
    setResultWithHook(first + second);
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
      <Form onSubmit={calculateResult} />
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
      </p>
    </div>
  );
};

export default App;
