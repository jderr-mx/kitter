import Ember from 'ember';

const {
  Controller,
  computed,
  get,
  inject: { service },
  set
} = Ember;

export default Controller.extend({
  flashMessages: service(),
  isEditing: false,
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
      let result = user.save();
      result.then(() => {
        set(this, 'isEditing', false);
        get(this, 'flashMessages').success('User profile saved!');
      }, () => {
        get(this, 'flashMessages').danger('An error ocurred');
      });

    }
  }
});
