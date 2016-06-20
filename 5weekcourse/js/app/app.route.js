(function () {
    'use strict';
    
    angular
        .module('app')
        .config(routeConfig);
        
        function routeConfig($routeProvider, $locationProvider) {
            $routeProvider
                .when('/day1', {
                    templateUrl: 'day1/content.html',
                    controller: 'Day1Controller',
                    controllerAs: 'c'
                })
                .when('/week02', {
                    templateUrl: 'week02/content.html',
                    controller: 'Week02Controller',
                    controllerAs: 'c'
                })
                
                .otherwise({redirectTo: '/day1'});
                
            $locationProvider.html5Mode(false);
        }
})();