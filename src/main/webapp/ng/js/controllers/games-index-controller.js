angular.module('ARLearn').controller('GamesIndexController', function ($scope, Game, GameService) {

    //$scope.games = {games: []};
    $scope.games = {};
    $scope.games.games=  [];

    $scope.disableGameLoading = false;

    $scope.loadMoreGames = function () {


        $scope.disableGameLoading = true;
        Game.resume({resumptionToken: $scope.games.resumptionToken})
            .$promise.then(function (data) {

            $scope.games.games = $scope.games.games.concat(data.games);
            //for (i = 0; i < data.games.length;i++){
            //    GameService.storeInCache(data.games[i]);
            //}
            //$scope.games = GameService.getGames();
            $scope.games.resumptionToken = data.resumptionToken;
            $scope.games.serverTime = data.serverTime;

            if (data.resumptionToken) {
                $scope.disableGameLoading = false
            } else {
                $scope.disableGameLoading = true
            }
        });

    };

    $scope.getGame = function(id) {
        return GameService.getGameFromCache(id);
    }

    $scope.addDummy = function() {
        GameService.getGameById(5884586231857152);
        $scope.games = GameService.getGames();
    }


});