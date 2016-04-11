(function() {
    var app = angular.module('ARLGameLibrary', []);


    app.directive('arlLibrary', function() {
        return  {
            restrict: 'E',
            controller: ['$http','gamesCollection',function($http, gamesCollection) {
                this.games = gamesCollection.getGames();
                this.query = "";

                var store = this;

                this.search = function(){
                    var req = {
                        method: 'POST',
                        url: 'http://localhost:8888/rest/myGames/search',
                        data: store.query,
                    }
                    $http(req).success(function(data){
                        store.games = data.games;
                    });
                };
            }],

            controllerAs: 'libraryCtrl',
            templateUrl: 'dist/angDirectives/arlGameLibrary.html'
        };
    });

    app.controller('libraryRunCreate',['$scope','$http',function($scope, $http) {
        $scope.data = {};
        $scope.createRun = function(){
            //alert('click create' +$scope.data.gameId + ' '+$scope.data.title);

            var req = {
                method: 'POST',
                url: 'http://localhost:8888/rest/myRuns',
                headers: {
                    'Authorization': 'GoogleLogin auth=ya29.dwKyvV-9kczs78N4GJiqndaCLoA9YVUnh83McOq7usY_GwyqpmjuhBBl0YSZ89uuICkO'
                },
                data: {
                    "type": "org.celstec.arlearn2.beans.run.Run",
                    "gameId": $scope.data.gameId,
                    "title": $scope.data.title
                },
            }
            $http(req).success(function(data){
                $scope.data = {};
            }).error(function(data, status, headers, config) {
                alert('error');
            });

        }
        $scope.setGameId = function(newGameId){
            $scope.data.gameId = newGameId;
        }
    }]);



})();
