(function() {
    var app = angular.module('ARLearn', ['ngCookies', 'ngRoute', 'ARLGameLibrary', 'ARLCollections']);

    //app.factory('gamesCollection', ['$http',function($http){
    //    var myGames = [];
    //    var req = {
    //        method: 'GET',
    //        url: '/rest/myGames/participate',
    //        headers: {
    //            'Authorization': 'GoogleLogin auth=ya29.dwKyvV-9kczs78N4GJiqndaCLoA9YVUnh83McOq7usY_GwyqpmjuhBBl0YSZ89uuICkO'
    //        }
    //    }
    //    $http(req).success(function(data){
    //        for (var i = 0; i < data.games.length; i++) {
    //            {
    //                myGames.push(data.games[i]);
    //            }
    //        }
    //    });
    //
    //   return {
    //
    //       getGames: function() {
    //         return myGames;
    //       },
    //
    //       addDummyGame: function() {
    //           var game ={title:'dummy'};
    //           myGames.push(game);
    //       },
    //       sayHello: function(){
    //           return 'hello service';
    //       }
    //   }
    //}]);

    app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({redirectTo: '/home'});

        $routeProvider.when('/home', {
            templateUrl: 'dist/angDirectives/arlHome.html'
        });

        $routeProvider.when('/games', {
            templateUrl: 'dist/angDirectives/arlHome.html'
        });

        $routeProvider.when('/friends', {
            templateUrl: 'dist/angDirectives/arlFriends.html'
        });

        $routeProvider.when('/library', {
            templateUrl: 'dist/angDirectives/arlLibrary.html'
        });

    }]);



    app.controller('loginCtrl', ['$cookies', '$scope', function($cookies, $scope) {
        // Retrieving a cookie
        $scope.oauth = $cookies.get('arlearn.OauthType');
        $scope.accessToken = $cookies.get('arlearn.AccessToken');
        $scope.isLoggedIn = function() {
            if ($scope.accessToken && $scope.oauth) return true;
            return false;
        };
    }]);

    app.directive('arlGames', ['gamesCollection', function(gamesCollection) {
       return  {
           restrict: 'E',
           controller: ['$http',function($http) {

               this.edit = function(game){
                   alert('click '+game.title);
               };
               this.games = gamesCollection.getGames();
               this.addDummy = function() {
                   gamesCollection.addDummyGame();
               };
               //var store = this;
               //var req = {
               //    method: 'GET',
               //    url: 'http://localhost:8888/rest/myGames/participate',
               //    headers: {
               //        'Authorization': 'GoogleLogin auth=ya29.dwKyvV-9kczs78N4GJiqndaCLoA9YVUnh83McOq7usY_GwyqpmjuhBBl0YSZ89uuICkO'
               //    }
               //}
               //$http(req).success(function(data){
               //    store.games = data.games;
               //});
           }],

           controllerAs: 'gamesCtrl',
           templateUrl: 'dist/angDirectives/myGames.html'
       };
    }]);

    app.directive('arlHeader', function() {
        return  {
            restrict: 'E',

            templateUrl: 'dist/angDirectives/arlHeader.html'
        };
    });

    app.directive('arlSidebar', function() {
        return  {
            restrict: 'E',

            templateUrl: 'dist/angDirectives/arlSidebar.html'
        };
    });

    app.directive('arlLogin', function() {
        return  {
            restrict: 'E',

            templateUrl: 'dist/angDirectives/arlLogin.html'
        };
    });
})();



