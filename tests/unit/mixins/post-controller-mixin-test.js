import Ember from 'ember';
import PostControllerMixinMixin from 'kitter/mixins/post-controller-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | post controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostControllerMixinObject = Ember.Object.extend(PostControllerMixinMixin);
  let subject = PostControllerMixinObject.create();
  assert.ok(subject);
});
