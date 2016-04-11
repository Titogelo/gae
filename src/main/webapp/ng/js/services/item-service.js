angular.module('ARLearn').service('GeneralItemService', function ($q, Item,ItemVisibility, CacheFactory) {


    CacheFactory('itemsCache', {
        maxAge: 24 * 60 * 60 * 1000, // Items added to this cache expire after 1 day
        cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
        deleteOnExpire: 'aggressive', // Items will be deleted from this cache when they expire
        storageMode: 'localStorage' // This cache will use `localStorage`.

    });

    return {
        loadItems: function (gameId) {
            var deferred = $q.defer();
            var dataCache = CacheFactory.get('itemsCache');
            Item.getGeneralItemsByGameId({gameId: gameId}).$promise.then(
                function (data) {

                    for (i = 0; i < data.generalItems.length; ++i) {
                        dataCache.put(data.generalItems[i].id, data.generalItems[i]);
                    }
                    deferred.resolve(data);
                }
            );
            return deferred.promise;
        },
        getItemFromCache: function(id) {
            var dataCache = CacheFactory.get('itemsCache');
            return dataCache.get(id);
        },
        visibleItems: function(runId) {
            var deferred = $q.defer();
            ItemVisibility.getVisibilityStatements({runId:runId}).$promise.then(
                function (data) {
                    deferred.resolve(data);
                }
            );
            return deferred.promise;
        }
    }

});