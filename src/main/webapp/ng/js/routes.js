angular.module('ARLearn')
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: '/ng/templates/home.html',
                controller: 'HomeController'
            })
            .when('/login', {
                templateUrl: '/ng/templates/login.html',
                controller: 'LoginController'
            })
            .when('/games/:id', {
                templateUrl: '/ng/templates/pages/games/show.html',
                controller: 'GamesShowController'
            })
            .when('/games', {
                templateUrl: '/ng/templates/pages/games/index.html',
                controller: 'GamesIndexController'
            })
            .when('/newGame', {
                templateUrl: '/ng/templates/pages/games/new.html',
                controller: 'GamesNewController'
            })
            .when('/run/:runId/edit', {
                templateUrl: '/ng/templates/run/edit.html',
                controller: 'RunController'
            })
            .when('/run/items/:runId', {
                templateUrl: '/ng/templates/items/list-index.html',
                controller: 'RunItemsController'
            })
            .when('/run/item/:runId/:itemId', {
                templateUrl: '/ng/templates/items/show.html',
                controller: 'RunItemController'
            })
            .when('/channelmonitor', {
                templateUrl: '/ng/templates/pages/channel/monitor.html',
                controller: 'ChannelMonitorController'
            })
            .otherwise({redirectTo: '/home'});

    }]);
