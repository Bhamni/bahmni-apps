'use strict';

angular.module('openmrs-module-bahmni.navigation', ['openmrs-module-bahmni.sessionService'])
    .controller('NavigationController', ['$scope', '$rootScope', '$location', 'sessionService', function ($scope, $rootScope, $location, sessionService) {
        var loginPagePath = "/login";

        $scope.createNew = function() {
            $location.url("/registration/patient/new");
        };

        $scope.logout = function () {
            $rootScope.errorMessage = null;
            sessionService.destroy();
            $location.url(loginPagePath);
        }

        $scope.onLoginPage = function() {   
            return $location.path() === loginPagePath;
        }
    }]);
