angular.module('ARLearn').service('RunService', function ($q, Run, CacheFactory) {

    CacheFactory('runsCache', {
        maxAge: 24 * 60 * 60 * 1000, // Items added to this cache expire after 1 day
        cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
        deleteOnExpire: 'aggressive', // Items will be deleted from this cache when they expire
        storageMode: 'localStorage' // This cache will use `localStorage`.

    });

    return {
        getRunById: function(id) {
            var deferred = $q.defer();
            var dataCache = CacheFactory.get('runsCache');
            if (dataCache.get(id)) {
                deferred.resolve(dataCache.get(id));
            } else {

                Run.getRun({id:id}).$promise.then(
                    function(data){
                        dataCache.put(id, data);
                        deferred.resolve(data);
                    }
                );
            }
            return deferred.promise;
        }

    }

});