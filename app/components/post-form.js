import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  Component,
  computed,
  get,
  set
} = Ember;

const Validations = buildValidations({
  postText: [
    validator('presence', {
      presence: true,
      message: 'Posts requires text!'
    }),
    validator('length', {
      max: 250
    })
  ]
});

export default Component.extend(Validations, {
  didValidate: false,
  isEditing: false,
  maxPostLength: 250,
  postText: '',
  charsRemaining: computed('postText', function() {
    return get(this, 'maxPostLength') - get(this, 'postText').length;
  }),

  actions: {
    createPost() {
      set(this, 'didValidate', false);
      set(this, 'isEditing', true);
    },

    cancelPost() {
      set(this, 'didValidate', false);
      set(this, 'isEditing', false);
      set(this, 'postText', '');
    },

    savePost() {
      set(this, 'didValidate', false);
      this.validate().then(({ validations }) => {
        set(this, 'didValidate', true);
        if (get(validations, 'isValid')) {
          let postText = get(this, 'postText');
          set(this, 'isEditing', false);
          set(this, 'postText', '');
          get(this, 'saveAction')(postText);
        }
      });
    }

  }
});
