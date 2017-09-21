import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

export default Component.extend({
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
      }, (e) => {
        alert('There was an error saving!');
      });
    }
  }
});
