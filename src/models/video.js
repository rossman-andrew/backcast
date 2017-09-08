var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    // console.log();
    // if (video.id !== undefined) {
    //   console.log(video);
    //   this.set('id', video.id.videoId);
    // } else {
    //   this.set('id', video.items[0].id.videoId);
    // }
    return this;
  },

  select: function() {
    this.trigger('select', this);
  }

});
