var SearchView = Backbone.View.extend({

  el: '.search',

  initialize: function() {
    //this.videos = new Videos();
    this.render();
    console.log($('.btn'));
    $('form').on('submit', (e) => {
      e.preventDefault();
      this.searchVideos();
    });
  },
  events: {
    // '.btn' : 'searchVideos'
  },
  searchVideos: function(e) {
    this.collection.search(this.$el.find('.form-control').val());
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
