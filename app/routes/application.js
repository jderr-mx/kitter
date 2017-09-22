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
    // setup posts hasMany is users because mirage doesn't like a mix of fixtures and factories
    /**
    let posts = get(this, 'store').findAll('post');
    let users = get(this, 'store').findAll('user');
    yield posts;
    yield users;
    posts.forEach((post) => {
      let userId = Math.floor(Math.random() * (5 - 1)) + 1;
      let user = users.find((u)  => {
        if (get(u, 'id') == userId) {
          return true;
        } else {
          return false;
        }
      });
      set(post, 'user', user);
      post.save();
    });
    */
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
