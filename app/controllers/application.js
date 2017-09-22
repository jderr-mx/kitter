import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  actions: {
    dismissModal() {
      set(this, 'session.showModal', false);
    }
  }
});
