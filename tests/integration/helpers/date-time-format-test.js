
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-time-format', 'helper:date-time-format', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '2001-01-01');

  this.render(hbs`{{date-time-format inputValue}}`);

  assert.equal(this.$().text().trim(), 'Mon 1st Jan 2001 12:00 am');
});

