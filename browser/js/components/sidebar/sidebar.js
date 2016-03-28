'use strict';

import React from 'react';
import {Link} from 'react-router';
import actions from '../../actions/auth-actions';

export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="col-xs-2">
        <sidebar>
          <section>
            <h5>
              {
                this.props.user ? this.props.user.username : null
              }
            </h5>
          </section>
          <section>
            <h5 className="playlist-item">
            {
              !this.props.user ? <Link to="/login">LOGIN</Link> : null
            }
            </h5>
          </section>
          <section>
            <h5 className="playlist-item">
            {
              !this.props.user ? <Link to="/signup">SIGNUP</Link> : null
            }
            </h5>
          </section>
          <section>
            <h5 className="playlist-item">
            {
              this.props.user ? <Link to="/albums">ALBUMS</Link> : null
            }
            </h5>
          </section>
          <section>
            <h5 className="playlist-item">
            {
              this.props.user ? <Link to="/artists">ARTISTS</Link> : null
            }
            </h5>
          </section>
          <section>
          {
            this.props.user ? <h5 className="playlist-item" onClick={actions.logout}>LOGOUT</h5> : null
          }
          </section>
        </sidebar>
      </div>
    );
  }
}
