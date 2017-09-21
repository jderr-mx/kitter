import { test } from 'qunit';
import moduleForAcceptance from 'kitter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  server.loadFixtures();
  server.createList('post', 15);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/', 'go to the index page');
  });

  andThen(function() {
    let el = find('.card');
    assert.equal(el.length, 5, 'index only loads the 5 most recent cards');
  });
});

test('visiting /feed', function(assert) {
  server.loadFixtures();
  server.createList('post', 15);

  visit('/feed');

  andThen(function() {
    assert.equal(currentURL(), '/feed', 'go to the feed page');
  });

  andThen(function() {
    let el = find('.card');
    assert.equal(el.length, 10, 'feed only loads the 10 most recent cards');
  });
});

test('visiting /profile', function(assert) {
  visit('/profile');

  andThen(function() {
    assert.equal(currentURL(), '/profile', 'go to the profile page');
  });
});
