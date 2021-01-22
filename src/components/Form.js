import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: undefined,
      second: undefined,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.first, this.state.second);
  }

  handleInputChange = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.type === 'number'
        ? parseInt(event.target.value, 10)
        : event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Form with class component</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="col-sm-12">
            <div className="col-sm-12 form-group">
              <input
                className="form-control"
                type="number"
                name="first"
                onChange={this.handleInputChange}
                value={this.state.a}
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
                onChange={this.handleInputChange}
                value={this.state.b}
                required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">SUM</button>
      </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
