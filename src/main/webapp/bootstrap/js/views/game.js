var app = app || {};

app.GameView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $( '#gameTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    },
    events: {
        'click .delete': 'deleteGame'
    },

    deleteGame: function() {
        //Delete model
        this.model.destroy();

        //Delete view
        this.remove();
    }
});