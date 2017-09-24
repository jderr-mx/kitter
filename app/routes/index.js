import Ember from 'ember';

const {
  Route,
  get,
  inject: { service }
} = Ember;

export default Route.extend({
  i18n: service(),
  model() {
    return get(this, 'store').query('post', { include: 'user', sort: 'dateTime', limit: 5 });
  },

  actions: {
    refeshModel() {
      this.refresh();
    }
  }
});
