angular
    .module('MainApp', ["checklist-model"])
        .config(function($httpProvider, $interpolateProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        })
    .controller('NoteController', NoteController)
    .controller('PanelController', PanelController)
    .controller('AuthorController', AuthorController);
