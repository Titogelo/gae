angular.module('ARLearn')
    .factory('Store', function StoreFactory($resource, $http, config) {
            $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also
            return $resource(config.server+'/rest/store/', {}, {

                'getFeaturedByLanguage': {
                    method: 'GET',
                    isArray: false,
                    url: config.server+'/rest/store/games/featured/lang/:lang'
                }
            });
        }
    );

