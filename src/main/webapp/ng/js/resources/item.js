angular.module('ARLearn')
    .factory('Item', function ItemFactory($resource, $http) {
            $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also
            return $resource('/rest/generalItems/:id', {}, {
                'getGeneralItemsByGameId': {
                    method: 'GET',
                    isArray: false,
                    url: '/rest/generalItems/gameId/:gameId'
                }
            });
        }
    );

angular.module('ARLearn')
    .factory('ItemVisibility', function ItemVisibilityFactory($resource, $http) {
            $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also
            return $resource('/rest/generalItemsVisibility/', {}, {
                getVisibilityStatements: {
                    method: 'GET',
                    isArray: false,
                    url: '/rest/generalItemsVisibility/runId/:runId'
                }
            });
        }
    );

