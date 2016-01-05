var AuthorController = function($http, $window) {
    var that = this;

    this.isAuth = false;
    this.url = 'http://127.0.0.1:8000/';

    this.user = {
        name: '',
        email: '',
        password: '',
        r_password: '',
    };

    this.login = function() {
        this.data = {
            username: that.user.name,
            password: that.user.password,
        };

        $http.post(that.url + 'rest-auth/login/', this.data)
        .success(function(response) {
            $window.sessionStorage.token = response.key;
            console.log($window.sessionStorage);
            that.isAuth = true;
        })
        .error(function(response) {
            delete $window.sessionStorage.token;
        });
    };

    this.test = function(some) {
        $http
        .get('http://127.0.0.1:8000/rest-auth/user/')
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                alert('e');
            });
    };

    this.logout = function() {
        $http.post('http://127.0.0.1:8000/rest-auth/logout/')
            .success(function(response) {
                that.isAuth = false;
            });
    }
};
