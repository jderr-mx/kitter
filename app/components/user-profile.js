import Ember from 'ember';

const {
  Component,
  computed,
  get,
  inject: { service },
  set
} = Ember;

export default Component.extend({
  flashMessages: service(),
  isEditing: false,
  isReadOnly: computed('isEditing', function() {
    if (get(this, 'isEditing')) {
      return false;
    } else {
      return true;
    }
  }),
  actions: {
    cancelEditProfile() {
      get(this, 'user').rollbackAttributes();
      set(this, 'isEditing', false);
    },
    editProfile() {
      set(this, 'isEditing', true);
    },
    saveProfile() {
      let result = get(this, 'saveAction')(get(this, 'user'));
      result.then(() => {
        set(this, 'isEditing', false);
        get(this, 'flashMessages').success('User profile saved!');
      }, () => {
        get(this, 'flashMessages').danger('An error ocurred');
      });
    }
  }
});
