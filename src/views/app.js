var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    let searchView = new SearchView();
    let videoPlayer = new VideoPlayerView();


    let videos = [];
    let videoListEntries = [];
    for(let i = 0; i < this.videos.length; i++) {
      videos.push(new Video(this.videos[i]));
      // videoListEntries.push(new VideoListEntryView({ model: videos[i] }));
    }

    var videoCollection = new Videos(videos);
    let videoList = new VideoListView({ collection: videoCollection });
    videoList.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
