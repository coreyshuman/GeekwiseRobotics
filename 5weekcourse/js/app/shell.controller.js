(function () {
    angular
        .module('app')
        .controller('ShellController', ShellController);
        
        function ShellController($scope) {
            var vm = this;
            
            vm.instructor = "Corey Shuman";
            
            vm.slackLink = 'https://geekwiserobotics.slack.com';
            vm.githubLink = 'http://coreyshuman.github.io/GeekwiseRobotics/5weekcourse';
            vm.labLink = 'https://123d.circuits.io/lab';
        }
})();