import Ember from 'ember';

const {
  Component,
  computed,
  get,
  set
} = Ember;

export default Component.extend({
  isEditing: false,
  maxPostLength: 250,
  postText: '',
  charsRemaining: computed('postText', function() {
    return get(this, 'maxPostLength') - get(this, 'postText').length;
  }),

  actions: {
    createPost() {
      set(this, 'isEditing', true);
    },

    cancelPost() {
      set(this, 'isEditing', false);
    },

    savePost() {
      let postText = get(this, 'postText');
      set(this, 'isEditing', false);
      set(this, 'postText', '');
      get(this, 'saveAction')(postText);

    }

  }
});
