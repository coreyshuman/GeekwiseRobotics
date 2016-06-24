(function () {
    'use strict';
    
    angular
        .module('app')
        .config(routeConfig);
        
        function routeConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when('/week01', {
                    templateUrl: 'week01/content.html',
                    controller: 'Week01Controller',
                    controllerAs: 'c'
                })
                .when('/week02', {
                    templateUrl: 'week02/content.html',
                    controller: 'Week02Controller',
                    controllerAs: 'c'
                })
                .when('/week03', {
                    templateUrl: 'week03/content.html',
                    controller: 'Week03Controller',
                    controllerAs: 'c'
                })
                
                .otherwise({redirectTo: '/week01'});
                
            $locationProvider.html5Mode(false);
        }
})();