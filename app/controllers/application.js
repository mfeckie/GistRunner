import Ember from 'ember';

export default Ember.Controller.extend({
  gistURL: 'some/default/thing',
  actions: {
    runIT: function() {
      this.set('result', 'When finished this will be full of super cool stuff!! FTW')
    }
  }
});