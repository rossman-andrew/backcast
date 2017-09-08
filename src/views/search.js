var SearchView = Backbone.View.extend({

  el: '.search',

  initialize: function() {
    //this.videos = new Videos();
    this.render();
  },
  events: {
    'click .btn' : 'searchVideos'
  },
  searchVideos: function() {

    this.collection.search(this.$el.find('.form-control').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
