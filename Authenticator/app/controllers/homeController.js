(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['$location', 'dataService'];

    function homeController($location, dataService) {
        var vm = this;
        vm.logout = logout;
        init();

        function logout() {
            dataService.clearData();
            $location.path('/');
        };

       function init () {
            dataService.getData(function (response) {
                vm.user = response;
            });
        }
    }

})();