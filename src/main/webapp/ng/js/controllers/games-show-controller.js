angular.module('ARLearn').controller('GamesShowController', function( $scope, $routeParams, Game, GameService) {
    //$scope.game = Game.getGameById({id:$routeParams.id});
    //$scope.game = GameService.getGameById($routeParams.id);
    GameService.getGameById($routeParams.id).then(function(data){
        $scope.game = data;
    })
});

