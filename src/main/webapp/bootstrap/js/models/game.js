var app = app || {};

//app.Book = Backbone.Model.extend({
//    defaults: {
//        coverImage: 'img/placeholder.png',
//        title: 'No title',
//        author: 'Unknown',
//        releaseDate: 'Unknown',
//        keywords: 'None'
//    }
//});

app.Game = Backbone.Model.extend({
    defaults: {
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    },
    parse: function( response ) {
        response.id = response.gameId;
        response._id = response.gameId;
        response.author = response.gameId;
        return response;
    },
    url: '/rest/test'
});
