'use strict';

import React from 'react';
import actions from '../actions/app-actions';

export default (InnerComponent, Store, stateCb, ajaxCb) => class extends React.Component {
  constructor (props) {
    super(props);
    this.state = stateCb(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    Store.addChangeListener(this._onChange);
  }

  componentDidMount () {
    if (ajaxCb) ajaxCb.call(null, this.props.params);
  }

  componentWillUnmount () {
    Store.removeChangeListener(this._onChange);
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
