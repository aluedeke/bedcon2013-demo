'use strict';

angular.module('bedconDemo2App')
    .controller('FilesCtrl', function ($scope, dropbox) {
        $scope.files = [];
        $scope.currentPath=[];

        dropbox.readDirectory('/', function (directory, files) {
            $scope.files = files;
            $scope.currentPath = directory.path.split('/');
        });

        $scope.openDirectory = function (file) {
            dropbox.readDirectory(file.path, function (directory, files) {
                $scope.files = files;
                $scope.currentPath = directory.path.split('/');
            });
        }

        $scope.openFile = function (file) {
            dropbox.getDownloadUrl(file.path, function (url) {
                window.open(url);
            });
        }

        $scope.clickBreadcrumb = function(pathNodes, index){
            var path = pathNodes.slice(0, index + 1).join('/');
            $scope.openDirectory({path: path});
        }
    });
