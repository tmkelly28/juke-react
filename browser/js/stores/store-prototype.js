'use strict';

const CHANGE_EVENT = 'change';

export default {
  emitChange () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
}
