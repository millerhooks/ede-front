angular.module('edepo.auth-session', [
    'edepo.config.constants'
])
.config(['$httpProvider', function($httpProvider) {
    var directToLoginOn401 = ['$q', '$location', function ($q, $location) {
        // Sends user to login page and invalidates the session if we encounter a 401 error
        return {
            // optional method
            'responseError': function(rejection) {
                if (rejection.status === 401) {
                    //redirect them back to login page
                    // $state causes a circular dependency error within $httpProvider, so use $location
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        }
    }];

    $httpProvider.interceptors.push(directToLoginOn401);
    // django and angular both support csrf tokens. This tells
    // angular which cookie to add to what header.
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}])
.factory('UserSession', function($http, $q, $window, config) {
    var user = null;
    var authEndpoint = '/auth/user/';

    function login(username, password) {
        // TODO: fill in with real endpoint once DRF is in place
        var deferred = $q.defer();

        function addAuthHeader(data, headersGetter) {
            // encode credentials in base64
            var headers = headersGetter();
            headers['Authorization'] = ('Basic ' + btoa(data.username +
            ':' + data.password));
        }

        // POST to the login endpoint. Transform the headers to encode base64 creds.
        $http.post(config.baseApiUrl + authEndpoint + 'login/', {
            username: username,
            password: password
        },{
            transformRequest: addAuthHeader
            //withCredentials: true
        }).then(function(result) {
            // Save the user returned
            user = result;
            // Save to the session storage, so we're still logged in after refresh.
            $window.sessionStorage["userInfo"] = JSON.stringify(user);
            deferred.resolve(user);
        }, function(error) {
            // TODO: Handle error
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function logout() {
        // TODO: Check for errors logging out?
        $http.delete(config.baseApiUrl + authEndpoint + 'logout/');
        user = null;
        $window.sessionStorage["userInfo"] = null;
    }

    function getUser() {
        return user;
    }

    return {
        login: login,
        logout: logout,
        user: user
    }
})
;