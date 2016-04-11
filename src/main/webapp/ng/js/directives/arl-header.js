angular.module('ARLearn').directive('arlHeader', function() {
    return  {
        restrict: 'E',
        controller: ['$translate', '$scope', function ($translate, $scope) {
            $scope.setLanguage = function(lang) {
                $translate.use(lang);
            }
        }],
        controllerAs: "header",
        templateUrl: '/ng/templates/pages/header.html'
    };
});
