var AuthorController = function($http, $window, $scope, $location, $rootScope, baseUrl) {
    var that = this;

    this.isAuth = $window.sessionStorage.token || false;

    this.user = {
        name: $window.sessionStorage.username || '',
        email: '',
        password: '',
        r_password: '',
    };

    this.error = '';

    $scope.$watch(
        function() {
            return that.user.password;
        }, function (newValue) {
            if (newValue) {
                that.error = '';
            }
        });

    this.login = function() {
        this.data = {
            username: that.user.name,
            password: that.user.password,
        };

        $http.post(baseUrl + 'rest-auth/login/', this.data)
            .success(function(response) {
                $window.sessionStorage.token = response.key;
                $window.sessionStorage.username = that.user.name;
                console.log($window.sessionStorage);
                that.isAuth = true;
                that.error = '';
            })
            .error(function(response) {
                that.user.password = '';
                that.error = "Can't authorizated, pls check your username or password";
                delete $window.sessionStorage.token;
            });
    };

    this.logout = function() {
        $http.post(baseUrl + 'rest-auth/logout/')
            .success(function(response) {
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.username;
                that.isAuth = false;
                that.user = {};
            });
    };

    // this.test = function(some) {
    //     $http
    //     .get(baseUrl + 'rest-auth/user/')
    //         .success(function(response) {
    //             // console.log(response);
    //         })
    //         .error(function(response) {
    //             alert('e');
    //         });
    // };

    // this.test1 = function() {
    //     // $window.sessionStorage.removeItem('token');
    //     console.log($window.sessionStorage);
    // };

    // this.isInArray = function (value, array) {
    //     return array.indexOf(value) > -1;
    // };

    // this.commonPage = ['/registration', '/'];

    // $rootScope.$on("$routeChangeStart", function (event, next, current) {
    //     console.log(next.$$route.originalPath);
    //     console.log('its work');
    //     console.log(that.isAuth);
    //     if (! that.isAuth) {
    //         if (next.$$route.originalPath && !that.isInArray(next.$$route.originalPath, that.commonPage)) {
    //             $location.path('/login');
    //         }
    //     }
    //     else {
    //         if (next.$$route.originalPath && that.isInArray(next.$$route.originalPath, that.commonPage)) {
    //             $location.path('/');
    //         }
    //     }

    //     // if (next) {
    //     //     event.preventDefault();
    //     //     $rootScope.$evalAsync(function() {
    //     //         $location.path('/login');
    //     //     });
    //     // }
    // });

};
