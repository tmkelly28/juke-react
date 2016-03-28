'use strict';

import React from 'react';
import Template from './app-template';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Albums from './albums/albums';
import Album from './album/album';
import Artists from './artists/artists';
import Artist from './artist/artist';
import ArtistAlbums from './artist/artist-albums';
import ArtistSongs from './artist/artist-songs';
import Login from './login/login';
import Signup from './signup/signup';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route path="albums" component={Albums} />
        <Route path="artists" component={Artists} />
        <Route path="albums/:albumId" component={Album} />
        <Route path="artists/:artistId" component={Artist}>
          <Route path="albums" component={ArtistAlbums} />
          <Route path="songs" component={ArtistSongs} />
        </Route>
      </Route>
    </Router>
  );
}
