angular.module('ARLearn').controller('HomeController', function ($scope, Store, Game) {

    //$scope.games = {games: []};
    $scope.games = [];

    Store.getFeaturedByLanguage({lang:'nl'}).$promise.then(function(data){
        console.log(data);
        var localData = data;
        for (var i = 0; i< data.games.length;i++) {

            mFunction = function localFct(game){
                Game.getGameById({id:game.gameId}).$promise.then(function(data){


                    game.title = data.title;
                    game.data = data;
                    console.log(game);
                    $scope.games.push(game);
                });
            } ;
            mFunction((data.games[i]));

        }
    });


});