'use strict';

angular.module('bahmni-app.initialization', ['openmrs-module-bahmni.login', 'openmrs-module-bahmni.spinner'])
    .factory('initialization', ['$rootScope', '$q', 'login', 'spinner', function($rootScope, $q, login, spinner){
        var initializationPromiseDefer = $q.defer();

        login.then(function () {
            var loadDataPromise = loadData();
            spinner.forPromise(loadDataPromise);
            loadDataPromise.then(function(){
                initializationPromiseDefer.resolve();
            });
        });

        return initializationPromiseDefer.promise;
    }]);
