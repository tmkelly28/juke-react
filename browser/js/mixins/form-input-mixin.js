'use strict';

import React from 'react';
import actions from '../actions/app-actions';
import { browserHistory } from 'react-router';

export default (InnerComponent, submitCb) => class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUserInput = this.handleInput.bind(this, 'username');
    this.handlePasswordInput = this.handleInput.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (param, evt) {
    this.setState({ [param]: evt.target.value });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    submitCb(this.state)
      .then(() => browserHistory.push('/albums'))
      .catch(console.error);
  }

  render () {
    return (
      <InnerComponent
        {...this.state}
        {...this.props}
        handleUserInput={this.handleUserInput}
        handlePasswordInput={this.handlePasswordInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
