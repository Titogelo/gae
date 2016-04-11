angular.module('ARLearn').controller('RunController', function ($scope, $routeParams, RunService, PlayerService) {

    RunService.getRunById($routeParams.runId).then(function (data) {
        $scope.runTitle = data.title;
        $scope.runId = data.runId;

    });

    PlayerService.getPlayersByRunId($routeParams.runId).then(function (data) {

        $scope.players = data;


    });

    PlayerService.getTeamsByRunId($routeParams.runId).then(function (data) {

        $scope.teams = data;


    })

});