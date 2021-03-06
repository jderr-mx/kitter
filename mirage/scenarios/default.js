import _ from 'lodash';
export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.loadFixtures();
  let posts = server.createList('post', 15);
  _.forEach(posts, (post) => {
    let userId = Math.floor(Math.random() * (5 - 1)) + 1;
    post.update('userId', userId);
    post.save();
  });
}
