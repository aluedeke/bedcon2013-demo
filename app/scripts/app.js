'use strict';

angular.module('bedconDemo2App', [])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                redirectTo: '/login'
            })
            .when('/login', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/files', {
              templateUrl: 'views/files.html',
              controller: 'FilesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
