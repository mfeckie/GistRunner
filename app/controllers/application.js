import Ember from 'ember';

export default Ember.Controller.extend({
  gistURL: 'some/default/thing',
  actions: {
    runIT: function() {
      console.log(this.get('gistURL'));
    }
  },
  result: "Whatver"
});