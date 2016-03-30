'use strict';

import React from 'react';
import {Link} from 'react-router';
import actions from '../../actions/auth-actions';

export default (props) => {
  return (
    <div className="col-xs-2">
      <sidebar>
        <section>
          <h5>
            {
              props.user ? props.user.username : null
            }
          </h5>
        </section>
        <section>
          <h5 className="playlist-item">
          {
            !props.user ? <Link to="/login">LOGIN</Link> : null
          }
          </h5>
        </section>
        <section>
          <h5 className="playlist-item">
          {
            !props.user ? <Link to="/signup">SIGNUP</Link> : null
          }
          </h5>
        </section>
        <section>
          <h5 className="playlist-item">
          {
            props.user ? <Link to="/albums">ALBUMS</Link> : null
          }
          </h5>
        </section>
        <section>
          <h5 className="playlist-item">
          {
            props.user ? <Link to="/artists">ARTISTS</Link> : null
          }
          </h5>
        </section>
        <section>
        {
          props.user ? <h5 className="playlist-item" onClick={actions.logout}>LOGOUT</h5> : null
        }
        </section>
      </sidebar>
    </div>
  );
}
