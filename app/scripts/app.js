'use strict';
/**
 * @ngdoc overview
 * @name ApsilonApp
 * @description
 * # ApsilonApp
 *
 * Main module of the application.
 */
angular
        .module('ApsilonApp', [
            'ngMaterial',
            'oc.lazyLoad',
            'ui.router',
            'ui.bootstrap',
            'kendo.directives',
            'angular-loading-bar',
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

                $ocLazyLoadProvider.config({
                    debug: false,
                    events: true,
                });

                $urlRouterProvider.otherwise('/dashboard/Home');

                $stateProvider
                        .state('dashboard', {
                            url: '/dashboard',
                            templateUrl: 'dashboard/main',
                            resolve: {
                                loadMyDirectives: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(
                                            {
                                                name: 'ApsilonApp',
                                                files: [
                                                    'app/scripts/directives/header/header.js',
                                                    'app/scripts/directives/header/header-notification/header-notification.js',
                                                    'app/scripts/directives/sidebar/sidebar.js',
                                                    'app/scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                                ]
                                            }),
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'toggle-switch',
                                                        files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                                            "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                                        ]
                                                    }),
                                            $ocLazyLoad.load(
                                                    {
                                                        name: 'ngAnimate',
                                                        files: ['bower_components/angular-animate/angular-animate.js']
                                                    })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngCookies',
                                                files: ['bower_components/angular-cookies/angular-cookies.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngResource',
                                                files: ['bower_components/angular-resource/angular-resource.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngSanitize',
                                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                                            })
                                    $ocLazyLoad.load(
                                            {
                                                name: 'ngTouch',
                                                files: ['bower_components/angular-touch/angular-touch.js']
                                            })
                                }
                            }
                        })
                        .state('dashboard.Home', {
                            url: '/Home',
                            controller: 'MainCtrl',
                            templateUrl: 'dashboard/Home',
                            resolve: {
                                loadMyFiles: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: [
                                            'app/scripts/controllers/main.js',
                                            'app/scripts/directives/dashboard/stats/stats.js',
                                            'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                            'bower_components/angular-chart.js/dist/angular-chart.css'
                                        ]
                                    }),
                                            //no need to load chart controller
                                            $ocLazyLoad.load({
                                                name: 'chart.js',
                                                files: ['app/scripts/controllers/chartContoller.js']
                                            })
                                }
                            }
                        })
                        .state('dashboard.blank', {
                            templateUrl: 'blank',
                            url: '/blank'
                        })

                        .state('dashboard.Chart', {
                            templateUrl: 'Chart',
                            url: '/Chart',
                            controller: 'ChartCtrl',
                            resolve: {
                                loadMyFile: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'chart.js',
                                        files: [
                                            'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                            'bower_components/angular-chart.js/dist/angular-chart.css'
                                        ]
                                    }),
                                            $ocLazyLoad.load({
                                                name: 'ApsilonApp',
                                                files: ['app/scripts/controllers/chartContoller.js']
                                            })
                                }
                            }
                        })
                        .state('dashboard.Users', {
                            templateUrl: 'Users',
                            url: '/Users',
                            controller: 'UsersCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/UsersCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Navigations', {
                            templateUrl: 'Navigations',
                            url: '/Navigations',
                            controller: 'NavigationsCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/NavigationsCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.NavigViewRight', {
                            templateUrl: 'NavigViewRight',
                            url: '/NavigViewRight',
                            controller: 'NavigViewRightCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/NavigViewRightCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Roles', {
                            templateUrl: 'Roles',
                            url: '/Roles',
                            controller: 'RolesCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/RolesCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Button', {
                            templateUrl: 'Ui_components/Button',
                            url: '/Button',
                            controller: 'ButtonCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/ui-components/ButtonCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Dialog', {
                            templateUrl: 'Ui_components/Dialog',
                            url: '/Dialog',
                            controller: 'DialogCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/ui-components/DialogCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Forms', {
                            templateUrl: 'Ui_components/Forms',
                            url: '/Forms',
                            controller: 'FormsCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/ui-components/FormsCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Tabs', {
                            templateUrl: 'Ui_components/Tabs',
                            url: '/Tabs',
                            controller: 'TabsCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/ui-components/TabsCtrl.js']
                                    });
                                }
                            }
                        })
                        .state('dashboard.Toast', {
                            templateUrl: 'Ui_components/Toast',
                            url: '/Toast',
                            controller: 'ToastCtrl',
                            resolve: {
                                load: function ($ocLazyLoad) {
                                    return $ocLazyLoad.load({
                                        name: 'ApsilonApp',
                                        files: ['app/scripts/controllers/ui-components/ToastCtrl.js']
                                    });
                                }
                            }
                        })

            }])
        .controller('ToastCtrl', function ($scope, $mdToast) {
            $scope.closeToast = function () {
                $mdToast.hide();
            };
        });


