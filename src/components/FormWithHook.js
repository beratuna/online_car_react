import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../hooks/useForm';

const FormWithHook = (props) => {
  const { inputs, handleInputChange } = useForm();

  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs.first, inputs.second);
  };

  return (
    <div className="container">
      <h1>Form with functional component</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="col-sm-12">
            <div className="col-sm-12 form-group">
              <input
                className="form-control"
                type="number"
                name="first"
                onChange={handleInputChange}
                value={inputs.a}
                placeholder="Give first number"
                required
              />
            </div>
            <div className="col-sm-12 form-group">
              <input
                className="form-control"
                type="number"
                name="second"
                placeholder="Give second number"
                onChange={handleInputChange}
                value={inputs.b}
                required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">SUM</button>
      </form>
    </div>
  );
};

FormWithHook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormWithHook;
