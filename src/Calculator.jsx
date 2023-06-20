/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import BoilingVedict from './BoilingVedict';
import Title from './Title';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temp: e.target.value,
    });
  }

  render() {
    const { temp: cel } = this.state;

    return (
      <div>
        <Title />
        <div className="form-group">
          <label>Entrer une temperature en Celsius : </label>
          <input type="text" className="form-control" onChange={this.handleChange} defaultValue={0} />
        </div>
        <br />
        <div className="form-group">
          <label>Conversion en degrée Farenheit : </label>
          <input type="text" className="form-control" id="conversion" value={`${(cel * 9 / 5) + 32} f`} />
        </div>
        <br />
        <BoilingVedict celsius={cel} />
      </div>
    );
  }
}

export default Calculator;
