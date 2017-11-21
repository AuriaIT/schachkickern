'use strict';
/**
 * @ngdoc function
 * @name schachkickern.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schachkickern
 */
angular.module('schachkickern', [])
    .controller('GameCtrl', ['$scope', '$http', '$location', '$log', 'gameService', function ($scope, $http, $location, $log, gameService) {

        var init = function() {
            $scope.game = gameService.getGame();

            if ($scope.game === null) {
                $location.path("app/home");
            }
        };

        init();
    }]);