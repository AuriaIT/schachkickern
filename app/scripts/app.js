'use strict';
/**
 * @ngdoc overview
 * @name schachkickern
 * @description
 * # schachkickern
 *
 * Main module of the application.
 */
angular
    .module('schachkickern', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });

        $urlRouterProvider.otherwise('/app/home');

        $stateProvider
            .state('app',
            {
                url: '/app',
                templateUrl: 'views/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'schachkickern',
                                files: [
                                    'scripts/resources/jstorage.js',
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/game/game-startscreen.js',
                                    'scripts/directives/game/game-dashboard.js',
                                    'scripts/services/gameService.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name: 'toggle-switch',
                                    files: [
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngAnimate',
                                    files: ['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngCookies',
                                    files: ['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngResource',
                                    files: ['bower_components/angular-resource/angular-resource.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngSanitize',
                                    files: ['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngTouch',
                                    files: ['bower_components/angular-touch/angular-touch.js']
                                });
                    }
                }
            })
            .state('app.home',
            {
                url: '/home',
                controller: 'MainCtrl',
                templateUrl: 'views/home.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'schachkickern',
                            files: [
                                'scripts/controllers/main.js'
                            ]
                        });
                    }
                }
            })
            .state('app.impressum',
                {
                    url: '/impressum',
                    controller: 'ImpressumCtrl',
                    templateUrl: 'views/impressum.html',
                    resolve: {
                        loadMyFiles: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'schachkickern',
                                files: [
                                    'scripts/controllers/impressum.js'
                                ]
                            });
                        }
                    }
            })
            .state('app.game',
                {
                    url: '/game',
                    controller: 'GameCtrl',
                    templateUrl: 'views/game.html',
                    resolve: {
                        loadMyFiles: function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'schachkickern',
                                files: [
                                    'scripts/controllers/game.js'
                                ]
                            });
                        }
                    }
                })
            .state('app.settings',
            {
                templateUrl: 'views/settings.html',
                url: '/settings',
                controller: 'SettingsCtrl',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'schachkickern',
                            files: [
                                'scripts/controllers/settings.js'
                            ]
                        });
                    }
                }
            });
    }]);


