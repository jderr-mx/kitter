import Ember from 'ember';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  actions: {
    closeAction() {
      get(this, 'closeModal')();
    }
  }
});
