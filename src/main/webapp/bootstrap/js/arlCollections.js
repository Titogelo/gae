(function() {
    var app = angular.module('ARLCollections', []);

    app.factory('gamesCollection', ['$http',function($http){
        var myGames = [];
        var req = {
            method: 'GET',
            url: '/rest/myGames/participate',
            headers: {
                'Authorization': 'GoogleLogin auth=ya29.dwKyvV-9kczs78N4GJiqndaCLoA9YVUnh83McOq7usY_GwyqpmjuhBBl0YSZ89uuICkO'
            }
        }
        $http(req).success(function(data){
            for (var i = 0; i < data.games.length; i++) {
                {
                    myGames.push(data.games[i]);
                }
            }
        });

        return {

            getGames: function() {
                return myGames;
            },

            addDummyGame: function() {
                var game ={title:'dummy'};
                myGames.push(game);
            },

            sayHello: function(){
                return 'hello service';
            }
        }
    }]);
})();