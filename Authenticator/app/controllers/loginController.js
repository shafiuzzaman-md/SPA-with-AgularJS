(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'authenticatorService', 'dataService', 'flashService'];

    function loginController($location, authenticatorService, dataService, flashService) {
        var vm = this;
        vm.login = login;

        function login() {
            authenticatorService.login(vm.username, vm.password, function (response) {
                if (response.success) {
                    dataService.setData(response.user);
                    $location.path('/home');               
                } else {
                    flashService.error(response.message);
                }
            });
        };
    }

})();