var VideoListEntryView = Backbone.View.extend({

  // el: ".video-list",

  tagName: 'div',

  initialize: function(vid) {
    //console.log(this.model);
    this.render();
  },

  events: {
    'click .video-list-entry-title' : 'selectVideoModel'
  },

  selectVideoModel: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
