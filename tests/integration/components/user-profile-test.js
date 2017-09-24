import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const {
  $,
  Object,
  RSVP,
  run,
  set
} = Ember;

moduleForComponent('user-profile', 'Integration | Component | user profile', {
  integration: true
});

test('it renders read only', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let user = Object.create({
    userName: 'IamJohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    posts: []
  });

  set(this, 'testUser', user);
  set(this, 'isReadOnly', true);
  this.render(hbs`{{user-profile user=testUser readOnly=isReadOnly}}`);

  assert.equal($('.user-name').val(), 'IamJohnDoe', 'Check userName');
  assert.equal($('.first-name').val(), 'John', 'Check firstName');
  assert.equal($('.last-name').val(), 'Doe', 'Check lastName');
  assert.equal($('.user-posts').text(), '0', 'Check post count');
  assert.equal($('.edit-user').length, 0, 'Check that Edit link is not rendered');
});

test('it renders with edit option', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let user = Object.create({
    userName: 'IamJohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    posts: []
  });

  set(this, 'testUser', user);
  set(this, 'testUser.rollbackAttributes', function() {
    set(this, 'firstName', 'John');
    set(this, 'lastName', 'Doe');
  });
  set(this, 'isReadOnly', false);
  this.on('mockSave', function(u) {
    RSVP.resolve(u);
  });
  this.render(hbs`{{user-profile user=testUser readOnly=isReadOnly saveAction=(action 'mockSave')}}`);

  assert.equal($('.user-name').val(), 'IamJohnDoe', 'Check userName');
  assert.equal($('.first-name').val(), 'John', 'Check firstName');
  assert.equal($('.last-name').val(), 'Doe', 'Check lastName');
  assert.equal($('.user-posts').text(), '0', 'Check post count');
  assert.equal($('.edit-user').length, 1, 'Check that Edit link is rendered');
  run(() => {
    assert.step('Click edit user link');
    $('.edit-user').click();
  });

  assert.equal($('.edit-user-disabled').length, 1, 'Check that Edit link is disabled');
  assert.equal($('.save-button').length, 1, 'Check that "Save" button is rendered');
  assert.equal($('.cancel-button').length, 1, 'Check that "Cancel" button is rendered');
  assert.step('Click cancel on user profile form after setting new values');
  this.set('testUser.firstName', 'Jim');
  this.set('testUser.lastName', 'Smith');
  $('.cancel-button').click();

  assert.equal($('.first-name').val(), 'John', 'Check firstName');
  assert.equal($('.last-name').val(), 'Doe', 'Check lastName');
  assert.equal($('.edit-user').length, 1, 'Check that Edit link is enabled');
  this.set('testUser.firstName', 'Jim');
  this.set('testUser.lastName', 'Smith');
  $('.save-button').click();
  assert.equal($('.first-name').val(), 'Jim', 'Check firstName');
  assert.equal($('.last-name').val(), 'Smith', 'Check lastName');
});
