/**
 * Created by ronaldkato on 15/03/14.
 */

(function () {

    'use strict';

    angular.module('ACTSApp', ['ionic', 'uiGmapgoogle-maps']);

    //ionic setup for cordova
    angular.module('ACTSApp').run(function($ionicPlatform){

        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });

    var routeConfig = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                abstract: true,
                url: "/home",
                templateUrl: "app/home/home.html"
            })
            .state('home.details', {
                abstract: true,
                url: '/details',
                views: {
                    "tab-connected": {
                        templateUrl: "app/home/homeDetails.html"
                    }
                }
            })
            .state('home.info', {
                url: '/info',
                views: {
                    "tab-info": {
                        templateUrl: "app/home/info.html"
                    }
                }
            })
            .state('home.contact', {
                url: '/contact',
                views: {
                    "tab-contact": {
                        templateUrl: "app/home/contactUs.html",
                        controller: "contactUstCtrl"
                    }
                }
            })
            .state('home.details.landing', {
                url: '/landing',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/landing.html"
                    }
                }
            })
            .state('home.details.help', {
                url: '/help',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/help.html"
                    }
                }
            })

            .state('home.details.connected', {
                url: '/connected',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/connected.html"
                    }
                }
            })

            .state('home.details.involved', {
                url: '/involved',
                views: {
                    "mainContent": {
                        templateUrl: "app/home/involved.html"
                    }
                }
            })
            .state('home.details.groups', {
                url: "/groups",
                views: {
                    "mainContent": {
                        templateUrl: "app/groups/groups.html"
                    }
                }

            }).state('home.details.woa', {
                url: "/woa",
                views: {
                    "mainContent": {
                        templateUrl: "app/women/woa.html"
                    }
                }
            }).state('home.details.men', {
                url: "/men",
                views: {
                    "mainContent": {
                        templateUrl: "app/men/men.html"
                    }
                }
            });
        // if none of the above states are match, use this as the fallback
        $urlRouterProvider.otherwise('/home/details/landing');
    }

    angular.module('ACTSApp').config(routeConfig);

})();
