var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function( ) {
        this.collection = new app.GameCollection(  );
        this.collection.fetch({reset:true});
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );
        this.listenTo( this.collection, 'reset', this.render );
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var gameView = new app.GameView({
            model: item
        });
        this.$el.append( gameView.render().el );
    },

    fetch: function(){
        this.collection.fetch();
    },

    events:{
        'click #add':'addGame'
    },

    addGame: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() != '' )
            {
                formData[ el.id ] = $( el ).val();
            }
        });

        //this.collection.add( new app.Game( formData ) );
        this.collection.create(formData);
    },

});