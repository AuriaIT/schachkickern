'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('schachkickern')
	.directive('gameStartscreen',function(){
		return {
        templateUrl:'scripts/directives/game/game-startscreen.html',
        restrict: 'E',
        replace: true
    	}
    })
    .controller('gameStartscreenCtrl', ['$scope', '$log', 'gameService', function ($scope, $log, gameService) {

        $scope.game = {};

        $scope.startGame = function() {
            $log.debug("start the game");
            $scope.game.isActive = true;
            gameService.setGame($scope.game);
        };

        var init = function () {
            $scope.game = gameService.getGame();
        };

        init();
    }]);


