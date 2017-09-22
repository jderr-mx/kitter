import Ember from 'ember';
import PostControllerMixinMixin from 'kitter/mixins/post-controller-mixin';
import { module, test } from 'qunit';

const {
  Object
} = Ember;

module('Unit | Mixin | post controller mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PostControllerMixinObject = Object.extend(PostControllerMixinMixin);
  let subject = PostControllerMixinObject.create();
  assert.ok(subject);
});
