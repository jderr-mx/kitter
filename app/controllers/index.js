import Ember from 'ember';
import PostControllerMixin from '../mixins/post-controller-mixin';

const {
  Controller,
  set
} = Ember;

export default Controller.extend(PostControllerMixin, {
  actions: {
    dismissModal() {
      set(this, 'session.showModal', false);
    }
  }
});
