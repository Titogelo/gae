angular.module('ARLearn')
    .factory('Session', function SessionFactory() {
        return {
            getOauthType : function(){
                return localStorage.getItem('oauth')
            },
            setOauthType : function(value){
                return localStorage.setItem('oauth', value)
            },
            getAccessToken: function() {
                return localStorage.getItem('accessToken')
            },
            setAccessToken: function(value) {
                return localStorage.setItem('accessToken', value)
            },
            reset: function(){
                localStorage.removeItem('oauth');
                localStorage.removeItem('accessToken');
            }
        }
    });