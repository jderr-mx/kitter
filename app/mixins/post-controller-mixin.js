import Ember from 'ember';

const {
  Mixin,
  get
} = Ember;

export default Mixin.create({
  actions: {
    savePost(postText) {
      let currentUser = get(this, 'session.currentUser');
      let post = get(this, 'store').createRecord('post', {
        dateTime: new Date(),
        text: postText,
        user: currentUser
      });

      post.save().then(() => {
        this.send('refeshModel');
      });
    }
  }
});
