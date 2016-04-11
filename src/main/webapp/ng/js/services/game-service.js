angular.module('ARLearn').service('GameService', function ($q, Game, CacheFactory) {

    CacheFactory('gamesCache', {
        maxAge: 24 * 60 * 60 * 1000, // Items added to this cache expire after 1 day
        cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
        deleteOnExpire: 'aggressive', // Items will be deleted from this cache when they expire
        storageMode: 'localStorage' // This cache will use `localStorage`.

    });

    return {
        getGameById: function(id) {
            var deferred = $q.defer();
            var dataCache = CacheFactory.get('gamesCache');
            if (dataCache.get(id)) {
                deferred.resolve(dataCache.get(id));
            } else {

                Game.getGameById({id:id}).$promise.then(
                    function(data){
                       dataCache.put(id, data);
                        deferred.resolve(data);
                    }
                );
            }
            return deferred.promise;
        },
        getGameFromCache: function(id) {
            var dataCache = CacheFactory.get('gamesCache');
            return dataCache.get(id);
        },
        storeInCache:function(game){
            var dataCache = CacheFactory.get('gamesCache');
            dataCache.put(game.gameId, game);

        },

        getGames: function(){
            var dataCache = CacheFactory.get('gamesCache');
            return dataCache.keySet();
        }
    }

});