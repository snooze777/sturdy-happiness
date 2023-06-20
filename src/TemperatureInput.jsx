import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { temperature: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
}

export default TemperatureInput;
