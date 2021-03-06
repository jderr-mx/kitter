import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    return get(this, 'store').query('post', { include: 'user', sort: 'dateTime', limit: 10 });
  },
  actions: {
    refeshModel() {
      this.refresh();
    }
  }

});
