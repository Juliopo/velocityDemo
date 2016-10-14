import React, { Component } from 'react';
import {
  View
} from 'react-native';

import IndexView from './indexView';

export default class velocityDemo extends Component {
  constructor() {
    super()

    this.state = {
      text: null
    }
  }

  handleInput(valueText) {
    this.setState({text: valueText});
  }

  submitSerachValue() {

  }

  render() {
    return (
      <IndexView handleInput={this.handleInput.bind(this)} />
    )
  }
}
