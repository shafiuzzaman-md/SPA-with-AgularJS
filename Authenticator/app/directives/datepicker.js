(function () {
    'use strict';
    angular
        .module('app')
        .directive('datepicker', datepicker);

    function datepicker() {
        return {
            restrict: "A",
            link: function (scope, el, attr) {
                el.datepicker({
                    dateFormat: 'yy-mm-dd'
                });
            }
        }
    }
})();