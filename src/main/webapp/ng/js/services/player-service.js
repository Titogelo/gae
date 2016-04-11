angular.module('ARLearn').service('PlayerService', function ($q, Player, Team) {

    return {
        getPlayersByRunId: function(runId) {
            var deferred = $q.defer();

            Player.getPlayersByRunId({id:runId}) .$promise.then(
                function(data){
                    deferred.resolve(data.users);
                }
            );
            return deferred.promise;
        },
        getTeamsByRunId: function(runId) {
            var deferred = $q.defer();

            Team.getTeamsByRunId({id:runId}) .$promise.then(
                function(data){
                    deferred.resolve(data.teams);
                }
            );
            return deferred.promise;
        }

    }

});

