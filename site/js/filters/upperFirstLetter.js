angular.module('MainApp')
    .filter('upperFirstLetter', function() {
        return function(name) {
            if (angular.isString(name)) {
                return name.charAt(0).toUpperCase() + name.slice(1);
            } else {
                return name;
            }
        };
    });
