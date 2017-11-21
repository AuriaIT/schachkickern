'use strict';
/**
 * @ngdoc function
 * @name schachkickern.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the schachkickern
 */
angular.module('schachkickern')
    .controller('MainCtrl', ['$scope', 'gameService', '$log', '$location', '$window', function ($scope, gameService, $log, $location, $window) {

        $scope.forms = {};
        $scope.settings = {};
        $scope.ui = {};
        $scope.ui.options = [];
        $scope.ui.options.push({ 'key': 1, 'value': "Schnelles Spiel" });
        $scope.ui.options.push({ 'key': 2, 'value': "Normales Spiel" });
        $scope.ui.options.push({ 'key': 3, 'value': "Intensives Spiel" });

        $scope.ui.existsActiveGame = false;
        $scope.game = {};

        $scope.next = function () {
            gameService.setGame({ 'PlayerA': $scope.settings.playerA, 'PlayerB': $scope.settings.playerB, 'Type': $scope.settings.type.key });
            $location.path("/app/game");
        };

        $scope.loadGame = function() {
            $location.path("/app/game");
        };

        $scope.resetGame = function () {
            gameService.resetGame();
            $window.location.href = "/#/app/home";
        };

        var init = function () {
            $scope.game = gameService.getGame();

            if ($scope.game !== null) {
                $scope.ui.existsActiveGame = true;
            }
        };

        init();
    }]);