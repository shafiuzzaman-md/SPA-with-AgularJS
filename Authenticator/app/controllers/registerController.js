(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['authenticatorService', '$location', 'flashService'];

    function registerController(authenticatorService, $location, flashService) {
        var vm = this;

        vm.register = register;

        vm.genderTypes = [
            { "id": "Male", "name": "Male" },
            { "id": "Female", "name": "Female" },
            { "id": "Other", "name": "Other" }
        ]

        function register() {
            authenticatorService.register(vm.user, function(response) {
                if (response.success) {
                    flashService.success(response.message, true);
                    $location.path('/');
                } else {
                    flashService.error(response.message);
                }
            });
        };
    }
})();