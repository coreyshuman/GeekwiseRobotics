(function () {
    angular
        .module('app')
        .controller('NavController', NavController);
        
        function NavController($scope, $location) {
            var vm = this;
            vm.path = "";

            $scope.$on('$locationChangeStart', function(event) {
                console.log(event)
                console.log($location.path())
                vm.path = $location.path();
            });
            
                
            
        }
})();