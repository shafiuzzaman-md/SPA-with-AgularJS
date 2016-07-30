(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'loginController',
                templateUrl: 'login.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'registerController',
                templateUrl: 'register.html',
                controllerAs: 'vm'
            })

             .when('/home', {
                 controller: 'homeController',
                 templateUrl: 'home.html',
                 controllerAs: 'vm'
             })

            .otherwise({ redirectTo: '/' });
    }
})();