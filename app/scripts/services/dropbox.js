'use strict';

angular.module('bedconDemo2App')
    .factory('dropbox', function ($rootScope, $q, $location) {
        var authenticated = $q.defer();
        var client = new Dropbox.Client({
            key: "N4WZG5gBgoA=|xOh2kYudeeNrjHqulSX4BBngz9CQX9MXvea8Gvhp/A==", sandbox: false
        });
        client.authDriver(new Dropbox.Drivers.Redirect({ useQuery: true, rememberUser: true}));


        var safeApply = function (fn) {
            !$rootScope.$root.$$phase ? $rootScope.$apply(fn) : fn();
        }

        function afterAuthentication(callback) {
            authenticated.promise.then(callback);
        }

        client.authenticate({interactive: false}, function (error, client) {
            if (error || client.isAuthenticated() == false) {
                $location.path('/');
                safeApply(authenticated.reject);
            } else {
                safeApply(authenticated.resolve);
            }
        });

        return {

            authenticate: function (callback) {
                client.authenticate(undefined, function (error, client) {
                    if (error) {
                        throw error;
                    }

                    safeApply(function () {
                        if (callback) {
                            callback();
                        }
                        authenticated.resolve();
                    });
                });
            },

            readDirectory: function (path, callback) {
                afterAuthentication(function () {
                    client.readdir(path, {}, function (error, files, stat, stats) {
                        if (error) {
                            return showError(error);
                        }

                        angular.forEach(stats, function (value, key) {
                            value.name = files[key];
                            value.isDirectory = value.isFolder;
                            value.modified = value.modifiedAt;
                        });


                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(stat, stats);
                            }
                        });
                    });
                });
            },

            getDownloadUrl: function (path, callback) {
                afterAuthentication(function () {
                    var xhr = new Dropbox.Xhr('GET', 'https://api-content.dropbox.com/1/files/dropbox' + path);
                    xhr.setParams({}).signWithOauth(client.oauth);

                    callback(xhr.paramsToUrl().url)
                });
            }
        };
    });
