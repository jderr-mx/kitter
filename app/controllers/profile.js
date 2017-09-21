import Ember from 'ember';

const {
  Controller,
  computed,
  get,
  set
} = Ember;

export default Controller.extend({
  profileReadOnly: computed('session.currentUser', 'model.id', function() {
    let sessionUserId = get(this, 'session.currentUser.id');
    if (sessionUserId == get(this, 'model.id')) {
      return false;
    } else {
      return true;
    }
  }),
  actions: {
    saveUserProfile(user) {
      return user.save();
    }
  }
});
