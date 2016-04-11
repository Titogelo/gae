angular.module('ARLearn').controller('LoginController', function( $scope, Session,$http, config) {
    $scope.oauth = Session.getOauthType;
    $scope.accessToken = Session.getAccessToken;
    $scope.isLoggedIn = function() {
        if ($scope.accessToken() && $scope.oauth()) return true;
        return false;
    };
    var providers = {};
    $http({method:'GET',url: config.server+'/rest/oauth/getOauthInfo/'}).success(function(data){

        for (var i in data.oauthInfoList) {
            console.log(data.oauthInfoList[i]);
            providers['prov'+i] = data.oauthInfoList[i];

        }
        console.log(providers);
        $scope.providerExists = function(providerId) {
            return (providers['prov'+providerId]!= null);
        }
    } );

});

