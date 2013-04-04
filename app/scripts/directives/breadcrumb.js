'use strict';

angular.module('bedconDemo2App')
    .directive('breadcrumb', function () {
        return {
            restrict: 'E',
            scope: {
                path: '=',
                onclick: '='
            },
            template:
                '<ul class="breadcrumb">' +
                    '<li ng-transclude></li>' +
                    '<li ng-repeat="node in path" ng-class="{true: \'active\'}[$last]">' +
                    '<a href="#" ng-click="onclick(path, $index)" ng-hide="$last">{{node}}</a><span class="divider" ng-hide="$last">/</span>' +
                    '<span ng-show="$last">{{node}}<span>' +
                    '</li>' +
                    '</ul>',
            transclude: true
        }
    });
