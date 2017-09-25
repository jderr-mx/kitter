import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  classNameBindings: ['fieldError'],
  fieldError: computed('model.validations.isValid', 'didValidate', 'value', function() {
    let didValidate = get(this, 'didValidate');
    let fieldName = get(this, 'fieldName');
    let isValid = get(this, `model.validations.attrs.${fieldName}.isValid`);
    if (!isValid && didValidate) {
      return true;
    } else {
      return false;
    }
  }),
  isInvalid: computed('fieldError', function() {
    return get(this, 'fieldError');
  }),
  messages: computed('fieldError', function() {
    let didValidate = get(this, 'didValidate');
    let fieldName = get(this, 'fieldName');
    let isValid = get(this, `model.validations.attrs.${fieldName}.isValid`);
    if (!isValid && didValidate) {
      return get(this, `model.validations.attrs.${fieldName}.messages`);
    }
  })
});
