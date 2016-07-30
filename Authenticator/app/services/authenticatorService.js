(function () {
    'use strict';

    angular
        .module('app')
        .factory('authenticatorService', authenticatorService);

    authenticatorService.$inject = ['$http'];

    function authenticatorService($http) {
        var service = {};
        var response = {};
        service.login = login;
        service.register = register;
        
        return service;

        function login(username, password, callback) {
            return $http.get('/api/users/' + username)
                .success(function (user) {
                    if (user !== null && user.Password === password) {
                        response = { success: true, user: user };
                    } else {
                        response = { success: false, message: 'UserId or password is incorrect' };
                    }
                    callback(response);
                });
        }

        function register(user, callback) {
            return $http.post('/api/users', user)
                .success(function () {
                    response = { success: true, message: 'Registration successful!' };
                    callback(response);
                }).error(function () {
                    response = { success: false, message: 'UserId is not avaiable' };
                    callback(response);
                });           
        }
    }
})();