import Ember from 'ember';

const {
  Mixin,
  get,
  inject: { service }
} = Ember;

export default Mixin.create({
  flashMessages: service(),
  actions: {
    savePost(postText) {
      let currentUser = get(this, 'session.currentUser');
      let post = get(this, 'store').createRecord('post', {
        dateTime: new Date(),
        text: postText,
        user: currentUser
      });

      post.save().then(() => {
        get(this, 'flashMessages').success('New post saved!');
        this.send('refeshModel');
      });
    }
  }
});
