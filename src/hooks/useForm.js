/* eslint-disable no-shadow */
import { useState } from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({
    first: undefined,
    second: undefined,
  });
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value, 10) : event.target.value }));
  };
  return {
    handleInputChange,
    inputs,
  };
};

export default useForm;
