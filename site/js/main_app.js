'use strict';

angular
    .module('MainApp', ["checklist-model", "ngRoute"])

        .config(function($httpProvider, $interpolateProvider, $windowProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.interceptors.push('authInterceptor');
        })

        .controller('NoteController', NoteController)
        .controller('PanelController', PanelController)
        .controller('AuthorController', AuthorController)

        .factory('authInterceptor', authInterceptor)

        .constant('baseUrl', 'http://127.0.0.1:8000/');
