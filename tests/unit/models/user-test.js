import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

const {
  get,
  run,
  set
} = Ember;

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: []
});

test('Test computed properties', function(assert) {
  assert.expect(3);
  let model = this.subject({ firstName: 'John', lastName: 'Doe', userName: 'AnonyMouse' });
  assert.equal('John Doe', get(model, 'fullName'), 'Check fullName computed property');
  assert.equal('John Doe (@AnonyMouse)', get(model, 'handle'), 'Check handle computed property');
  run(() => {
    set(model, 'firstName', 'Jane');
  });
  assert.equal('Jane Doe', get(model, 'fullName'), 'Check fullName computed property after change');
});
