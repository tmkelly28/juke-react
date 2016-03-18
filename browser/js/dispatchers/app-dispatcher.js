'use strict';

import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register (cb) {
  return flux.register(cb);
}

export function dispatch (action) {
  flux.dispatch(action);
}
