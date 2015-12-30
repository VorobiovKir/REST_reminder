angular
    .module('MainApp', ["checklist-model", "ngRoute"])

        .config(function($httpProvider, $interpolateProvider, $windowProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        })

        .controller('NoteController', NoteController)
        .controller('PanelController', PanelController)
        .controller('AuthorController', AuthorController)

        .factory('authInterceptor', function($window) {
            return {
                request: function(config) {
                    config.headers = config.headers || {};
                    if ($window.sessionStorage.token) {
                        config.headers.Authorization = 'Token ' + $window.sessionStorage.token;
                    }
                    return config;
                },

            };
        })

        .config(function($httpProvider) {
            $httpProvider.interceptors.push('authInterceptor');
        });
