'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('schachkickern')
    .directive('gameDashboard', function () {
        return {
            templateUrl: 'scripts/directives/game/game-dashboard.html',
            restrict: 'E',
            replace: true
        }
    })
    .controller('gameDashboardCtrl', ['$scope', '$log', 'gameService', '$interval', function ($scope, $log, gameService, $interval) {




        $scope.activePlayer = "A";

        var chessTime = 9; // 9 Minuten | Todo: Je nach Modus (Schnell,Normal,Intensiv)
        var secondsLeft = 60 * chessTime;
        var minutes, seconds; // variables for time units
        var secondsLeftA = 0;
        var secondsLeftB = 0;
        var intervalPromise;

        var getCountdown = function () {

            // find the amount of "seconds" between now and target
            secondsLeft -= 1;

            minutes = pad(parseInt(secondsLeft / 60));
            seconds = pad(parseInt(secondsLeft % 60));

            if (secondsLeftA === 0) {
                secondsLeftA = secondsLeft;
            }
            if (secondsLeftB === 0) {
                secondsLeftB = secondsLeft;
            }

            if (minutes % 3 === 0 && minutes !== chessTime && seconds === "00") {
                if (angular.isDefined(intervalPromise)) {
                    $interval.cancel(intervalPromise);
                    intervalPromise = undefined;
                }
                $scope.game.activeGame = "Kicker";

            }

            $scope.game.TotalTime.Minutes = minutes;
            $scope.game.TotalTime.Seconds = seconds;

            if ($scope.activePlayer === "A") {
                secondsLeftA -= 1;
                var minutesA = pad(parseInt(secondsLeftA / 60));
                var secondsA = pad(parseInt(secondsLeftA % 60));
                $scope.game.TimePlayerA.Minutes = minutesA;
                $scope.game.TimePlayerA.Seconds = secondsA;
            } else {
                secondsLeftB -= 1;
                var minutesB = pad(parseInt(secondsLeftB / 60));
                var secondsB = pad(parseInt(secondsLeftB % 60));
                // format countdown string + set tag value
                $scope.game.TimePlayerB.Minutes = minutesB;
                $scope.game.TimePlayerB.Seconds = secondsB;
            }


        };

        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }

        $scope.changeActivePlayer = function () {
            if ($scope.activePlayer === "A") {
                $scope.activePlayer = "B";
            } else {
                $scope.activePlayer = "A";
            }
        };

        $scope.finishKicker = function () {
            $scope.game.activeGame = "Schach";
            $scope.startCountdown();
        }

        $scope.startCountdown = function () {

            if (angular.isDefined(intervalPromise)) {
                $interval.cancel(intervalPromise);
                intervalPromise = undefined;
            }

            getCountdown();
            intervalPromise = $interval(getCountdown, 1000);
        };

        $scope.updateGoals = function(g1,g2) {

        };

        var init = function () {

            $scope.game = {};

            $scope.game = gameService.getGame();


            $scope.game.activeGame = "Schach";
            $scope.game.TotalTime = {};
            $scope.game.TimePlayerA = {};
            $scope.game.TimePlayerA.Minutes = pad(9);
            $scope.game.TimePlayerA.Seconds = pad(0);
            $scope.game.TimePlayerB = {};
            $scope.game.TimePlayerB.Minutes = pad(9);
            $scope.game.TimePlayerB.Seconds = pad(0);
            $scope.game.GoalsA = 0;
            $scope.game.GoalsB = 0;



            $scope.startCountdown();
        };

        init();
    }]);



