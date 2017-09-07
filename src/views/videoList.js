var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    //this.videos = new Videos();
    // this.render();
    this.collection.on('sync', this.render, this);
    this.collection.on('reset', function() {
      this.render();
    } , this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // for(let i = 0; i < exampleVideoData.length; i++) {
    //   console.log(exampleVideoData[i]);
    //   this.$el.append((new VideoListEntryView({ model: exampleVideoData[i] })).el);
    // }
    for(let i = 0; i < this.collection.models.length; i++) {
      this.$el.find('.video-list').append((new VideoListEntryView({ model: this.collection.models[i] })).el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
