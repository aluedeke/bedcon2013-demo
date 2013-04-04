'use strict';

angular.module('bedconDemo2App')
    .controller('MainCtrl', function ($scope, $location, dropbox) {
        if($location.search()['dboauth_token'] && $location.search()['oauth_token']){
            $location.path('/files');
        }

        $scope.connectDropbox = function () {
            dropbox.authenticate(function () {
                $location.path('/files');
            });
        };
    });
