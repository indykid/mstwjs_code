//##needs
TimeTravel.HotelController = Ember.ObjectController.extend({
  needs: "trip",
  trip: null,
  tripBinding: "controllers.trip",
//##needs

  init: function() {
    this._super();
  },

  actions: {
    itemChanged: function() {
      this.get("content").save();
    }
  }

});
