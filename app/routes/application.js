import Ember from 'ember';
import { task } from 'ember-concurrency';
const {
  Route,
  get,
  set
} = Ember;

export default Route.extend({

  beforeModel() {
    this._super();
    get(this, 'beforeModelTask').perform();
  },

  beforeModelTask: task(function* () {
    // setup currentUser to mock a session user
    let users = get(this, 'store').findAll('user');
    yield users;
    let currentUser;
    let filterdUsers = users.filterBy('userName', 'RightMeow');
    if (!filterdUsers.length) {
      currentUser = get(this, 'store').findRecord('user', 6);
    } else {
      currentUser = filterdUsers[0];
    }
    set(this, 'session.currentUser', currentUser);
  })
});
