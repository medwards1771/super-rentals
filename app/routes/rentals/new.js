import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('rental');
  },
 actions: {
  save(model){  
    model.save().then(() => {
      this.transitionTo('rentals');
    });
    return false;
  }
 }
});
