/**
 * @ngdoc function
 * @name schachkickern.service:Game
 * @description
 * # Game Service
 * Service of the schachkickern
 */
angular.module('schachkickern')
    .factory('gameService', ['$log', function ($log) {

        
        $log.debug("Starting Service");
        var service = {
            setGame: setGame,
            resetGame: resetGame,
            getGame: getGame
        };

        return service;

        function setGame(gameDto) {
            $log.info(gameDto);
            $.jStorage.set("game", gameDto);
        }

        function getGame() {
            return $.jStorage.get("game", null);
        }

        function resetGame() {
            return $.jStorage.set("game", null);
        }
    }]);