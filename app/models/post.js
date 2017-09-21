import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  dateTime: attr('date'),
  text: attr('string'),
  user: belongsTo('user')
});
