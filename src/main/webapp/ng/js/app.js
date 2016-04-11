angular.module('ARLearn', ['ngRoute', 'ngResource', 'infinite-scroll', 'angular-cache', 'pascalprecht.translate']).
config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        files: [{
            prefix: '/ng/i18n/',
            suffix: '.json'
        }]});

    $translateProvider
        .preferredLanguage('en');
}).run(function ($http) {
    $http.defaults.headers.common['Authorization'] = 'GoogleLogin auth=ya29.kQK7ma-ejSZk0e0BM_Kf21HZSmeNiCca7WxODi33BwmUdOR6S70cc1ybv_C9KU1qxegJ'; //Using $http we can set header also

});
