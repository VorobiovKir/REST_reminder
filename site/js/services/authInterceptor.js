var authInterceptor = function($window) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Token ' + $window.sessionStorage.token;
            }
            return config;
        }
    };
};
