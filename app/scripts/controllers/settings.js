'use strict';
/**
 * @ngdoc function
 * @name schachkickern.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schachkickern
 */
angular.module('schachkickern', [])
    .controller('SettingsCtrl', ['$scope', '$http', '$location', '$log', function ($scope, $http, $location, $log) {
      
        $scope.saveSettings = function () {
            $log.info();
            $location.path("/home");
        };


       

        $scope.settings = {};
        $log.info("SettingsController");

        $scope.vm = this;

    }]);