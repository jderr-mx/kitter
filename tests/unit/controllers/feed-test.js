import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:feed', 'Unit | Controller | feed', {
  // Specify the other units that are required for this test.
  needs: ['service:flashMessages']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
