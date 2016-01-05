angular
    .module('MainApp')

    .config(function($routeProvider) {

        $routeProvider
            .when('/registration/', {
                templateUrl: '/templates/anonymous/registration.html',
            })

            .when('/main/', {
                templateUrl: '/templates/authorizated/main.html',
            })

            .when('/', {
                templateUrl: '/templates/anonymous/login.html',
            })

            .otherwise( { redirectTo: '/' });

    });
