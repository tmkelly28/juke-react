'use strict';

import React from 'react';
import FormInputMixin from '../../mixins/form-input-mixin';
import actions from '../../actions/auth-actions';

const iconStyle = {
  height: '10em',
  width: '100%',
  margin: '0 auto'
}

const Signup = (props) => {
  return (
    <div>
      <form role="form">
        <h3>Signup</h3>
        <img src="juke.svg" style={iconStyle} />
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input type="text" onChange={props.handleUserInput} placeholder="Username" className="form-control" />
          <label htmlFor="password">Password</label>
          <input type="password" onChange={props.handlePasswordInput} placeholder="Password" className="form-control" />
        </div>
        <button type="submit" onClick={props.handleSubmit} className="btn btn-default">Submit</button>
      </form>
      {
        props.authError ? <div className="alert alert-danger">{props.authError}</div> : null
      }
    </div>
  );
}

export default FormInputMixin(Signup, actions.signup);
