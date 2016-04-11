angular.module('ARLearn')
    .factory('Player', function GameFactory($resource, $http, config) {
            return $resource(config.server+'/rest/users', {}, {
                'getPlayersByRunId': {
                    method: 'GET',
                    isArray: false,
                    url: config.server+'/rest/users/runId/:id'
                },

            });
        }
    );

angular.module('ARLearn')
    .factory('Team', function GameFactory($resource, $http, config) {
            return $resource(config.server+'/rest/team', {}, {
                'getTeamsByRunId': {
                    method: 'GET',
                    isArray: false,
                    url: config.server+'/rest/team/runId/:id'
                },

            });
        }
    );