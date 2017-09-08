var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.render();
    // this.videos.on('select', function(event) {
    //
    //   console.log('video is selected')
    //   console.log(event);
    //   new VideoPlayerView({ model: event })
    // }, this);
    this.videos.on('select', function(video) {
      new VideoPlayerView({ model: video });
    } , this);
  },


  render: function() {
    this.$el.html(this.template());
    let searchView = new SearchView({collection: this.videos});
    let videoPlayerView = new VideoPlayerView({ model: this.videos.models[0] });

    let videoModels = [];
    let videoListEntries = [];

    for(let i = 0; i < this.videos.length; i++) {
      videoModels.push(new Video(this.videos.models[i]));
      // videoListEntries.push(new VideoListEntryView({ model: videos[i] }));
    }


    let videoList = new VideoListView({ collection: this.videos });
    videoList.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
