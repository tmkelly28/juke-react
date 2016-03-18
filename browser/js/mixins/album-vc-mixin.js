'use strict';

import React from 'react';
import AlbumStore from '../stores/album-store';
import actions from '../actions/app-actions';

export default (InnerComponent, stateCb, ajaxCb) => class extends React.Component {
  constructor (props) {
    super(props);
    this.state = stateCb(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    AlbumStore.addChangeListener(this._onChange);
  }

  componentDidMount () {
    ajaxCb.call(null, this.props.params.albumId);
  }

  componentWillUnmount () {
    AlbumStore.removeChangeListener(this._onChange);
  }

  _onChange () {
    this.setState(stateCb(this.props));
  }

  render () {
    return (
      <InnerComponent {...this.state} {...this.props} />
    );
  }
}
