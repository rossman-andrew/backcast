var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(text) {
    console.log('search invoked');
    // console.log(this.fetch({data: {
    //   'maxResults': '5',
    //   'part': 'snippet',
    //   'q': 'surfing',
    //   'type': '',
    //   'key' : 'AIzaSyAMiP2K41aBsuZsijtqMqHSGrTK2HYUkF8'
    // }}));


    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'maxResults': '5',
        'part': 'snippet',
        'q': text,
        'type': 'video',
        'videoEmbeddable': 'true',
        'key' : 'AIzaSyAMiP2K41aBsuZsijtqMqHSGrTK2HYUkF8'
      },
      success: (data) => {
        // console.log(data);
        // this.trigger('reset', data.items);
        this.reset(data.items);
      }
    });
    // this.reset((this.fetch({data: {
    //   'maxResults': '5',
    //   'part': 'snippet',
    //   'q': 'surfing',
    //   'type': '',
    //   'key' : 'AIzaSyAMiP2K41aBsuZsijtqMqHSGrTK2HYUkF8'
    // }})).responseJSON.items)
    // console.log('after fetch');

    // buildApiRequest(
    //   'GET',
    //   '/youtube/v3/search',
    //   {
    //     'maxResults': '5',
    //     'part': 'snippet',
    //     'q': 'surfing',
    //     'type': '',
    //     'key' : 'AIzaSyAMiP2K41aBsuZsijtqMqHSGrTK2HYUkF8'
    //   }
    // );
  }

});
