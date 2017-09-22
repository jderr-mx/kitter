export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  this.namespace = 'api';

  this.get('/posts', (schema, request) => {
    let posts = schema.all('post');
    let  { limit } = request.queryParams;

    let results = posts.sort((a, b) => {
      let dateA = new Date(a.dateTime);
      let dateB = new Date(b.dateTime);
      if (dateA > dateB) {
        return -1;
      }

      if (dateA < dateB) {
        return 1;
      }
      return 0;
    });

    if (limit) {
      let count = 0;
      results = results.filter((post) => {
        if (count < limit) {
          count++;
          return post;
        }
      });
    }
    return results;
  });
  this.patch('/posts/:id');
  this.post('/posts');
  this.get('/posts/:id');
  this.get('/users');
  this.get('/users/:id');
  this.patch('/users/:id');
  this.post('/users');
}
