/* eslint no-undef: 0 */
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
    let el = find('button.close');
    assert.equal(el.length, 1, 'Modal Visible');
    el.click();
    el = find('button.close');
    assert.equal(el.length, 0, 'Modal Dismissed');
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

test('Visit user profile read only', function(assert) {
  server.loadFixtures();
  server.createList('post', 15);
  visit('/profile/1');

  andThen(function() {
    assert.equal(currentURL(), '/profile/1', 'Go to the profile page');
  });

  andThen(function() {
    let el = find('.edit-user');
    assert.equal(el.length, 0, 'Edit link does not exist');
  });
});

test('Visit user profile current user', function(assert) {
  server.loadFixtures();
  server.createList('post', 15);
  visit('/profile/6');

  andThen(function() {
    assert.equal(currentURL(), '/profile/6', 'Go to the profile page');
  });

  andThen(function() {
    let el = find('.edit-user');
    assert.equal(el.length, 1, 'Edit link exists');
  });
});
