var VideoListEntryView = Backbone.View.extend({

  tagName: 'div',

  initialize: function(vid) {
    console.log(this.model);
    this.render();
  },

  render: function() {
    console.log(this.template);
    this.$el.html(this.template(this.model.attributes.snippet));
    //this.$el.html(this.template('hello'));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
