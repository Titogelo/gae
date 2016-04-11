var app = app || {};

app.GameCollection = Backbone.Collection.extend({
    model: app.Game,
    parse: function (response) {
        return response.games;
    },
    //url: function(){
    //    return '/rest/test';
    //},
    url: '/rest/test'
});