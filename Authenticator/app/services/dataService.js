(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    function dataService() {
        var service = {};
        service.setData = setData;
        service.getData = getData;
        service.clearData = clearData;

        return service;

        function setData(data) {
            this.data = data;
        }

        function getData(callback) {
            callback(this.data);
        }

        function clearData() {
            this.data = null;
        }
    }
})();