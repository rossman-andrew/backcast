var VideoListEntryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function(vid) {
    //console.log(this.model);
    this.render();
  },

  events: {
    'click' : 'selectVideoModel'
  },

  selectVideoModel: function() {
    this.model.select();
  },

  render: function() {
    console.log(this.template);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
