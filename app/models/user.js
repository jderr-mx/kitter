import DS from 'ember-data';
import Ember from 'ember';

const {
  Model,
  attr,
  hasMany
} = DS;

const {
  computed,
  get
} = Ember;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  profilePic: attr('string'),
  userName: attr('string'),
  posts: hasMany('post'),

  fullName: computed('firstName', 'lastName', function() {
    return `${get(this, 'firstName')} ${get(this, 'lastName')}`;
  }),
  handle: computed('fullName', 'userName', function() {
    return `${get(this, 'fullName')} (@${get(this, 'userName')})`;
  })
});
