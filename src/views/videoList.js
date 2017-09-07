var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for(let i = 0; i < this.collection.models.length; i++) {
      this.$el.append((new VideoListEntryView({ model: this.collection.models[i] })).el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
