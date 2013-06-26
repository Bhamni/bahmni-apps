'use strict';


angular.module('openmrs-module-bahmni', [
                    'openmrs-module-bahmni.homepage', 'openmrs-module-bahmni.navigation',
                    'openmrs-module-bahmni.loginController', 'http-auth-interceptor', 'openmrs-module-bahmni.login'
])

angular.module('openmrs-module-bahmni').config(
  ['$routeProvider', '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $routeProvider.when('/login', {templateUrl: 'modules/auth/views/login.html', controller: 'LoginController'});
        $routeProvider.when('/home', {templateUrl: 'modules/home/views/home.html', controller: 'HomePageController', resolve: {login: 'login'}});
        $routeProvider.otherwise({redirectTo: '/home'}); //might need to change to login
        $httpProvider.defaults.headers.common['Disable-WWW-Authenticate'] = true;
    }
]).run(function($rootScope, $templateCache) {
        //Disable caching view template partials
        $rootScope.$on('$viewContentLoaded', function() {
            $templateCache.removeAll();
        }
    )});
