import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const {
  Route,
  get,
  inject: { service },
  set
} = Ember;

export default Route.extend({
  i18n: service(),
  model() {
    return get(this, 'store').query('post', { include: 'user', sort: 'dateTime', limit: 5 });
  },

  setupController(controller, model) {
    this._super(controller, model);
    let setupControllerTask = get(this, 'setupControllerTask').perform(controller);
    set(controller, 'setupControllerTask', setupControllerTask);
  },

  setupControllerTask: task(function* (controller) {
    set(controller, 'statusMessage', 'Thinking about stuff...');
    yield timeout(1000);
    set(controller, 'statusMessage', 'Doing some stuff...');
    yield timeout(1000);
    set(controller, 'statusMessage', 'Finishing up stuff...');
    yield timeout(1000);
    set(controller, 'statusMessage', '');
  }),

  actions: {
    refeshModel() {
      this.refresh();
    }
  }
});
