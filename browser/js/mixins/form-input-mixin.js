'use strict';

import React from 'react';
import actions from '../actions/app-actions';
import {browserHistory} from 'react-router';

export default (type, submitCb) => class extends React.Component {

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
    submitCb(this.state);
  }

  render () {

    const iconStyle = {
      height: '10em',
      width: '100%',
      margin: '0 auto'
    }

    return (
      <div className="col-xs-10">
        <form role="form">
          <h3>{type}</h3>
          <img src="juke.svg" style={iconStyle} />
          <div className="form-group">
            <label htmlFor="user">Username</label>
            <input type="text" onChange={this.handleUserInput} placeholder="Username" className="form-control" />
            <label htmlFor="password">Password</label>
            <input type="password" onChange={this.handlePasswordInput} placeholder="Password" className="form-control" />
          </div>
          <button type="submit" onClick={this.handleSubmit} className="btn btn-default">Submit</button>
        </form>
        {
          this.props.authError ? <div className="alert alert-danger">{this.props.authError}</div> : null
        }
    </div>
    );
  }
}
