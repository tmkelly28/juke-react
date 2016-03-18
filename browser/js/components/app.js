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

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Albums}></IndexRoute>
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
