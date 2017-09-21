import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  dateTime() {
    return faker.date.past();
  },
  text() {
    return faker.lorem.paragraph();
  }
});
