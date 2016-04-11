angular.module('ARLearn')
    .factory('Run', function RunFactory($resource, $http) {
            $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also
            return $resource('/rest/myRuns/:id', {}, {
                getRun: {
                    method: 'GET',
                    isArray: false,
                    url: '/rest/myRuns/runId/:id'

                }
            });
        }
    );

