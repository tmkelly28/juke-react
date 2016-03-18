'use strict';

import React from 'react';
import {Link} from 'react-router';


export default class Sidebar extends React.Component {
  render () {
    return (
      <div className="col-xs-2">
        <sidebar>
          <section>
            <h5 className="playlist-item">
              <Link to="/albums">ALBUMS</Link>
            </h5>
          </section>
          <section>
            <h5 className="playlist-item">
              <Link to="/artists">ARTISTS</Link>
            </h5>
          </section>
        </sidebar>
      </div>
    );
  }
}
