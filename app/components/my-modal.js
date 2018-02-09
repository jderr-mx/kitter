import Ember from 'ember';

const { Component, set } = Ember;

export default Component.extend({
    showModal: true,
    actions: {
        dismissModal() {
            set(this, 'showModal', false);
        }
    }
});
