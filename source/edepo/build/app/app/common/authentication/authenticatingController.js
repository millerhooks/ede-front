angular.module('edepo.authenticating-controller', [
    'edepo.models.current-user'
])
/**
 * Used as mixin for controllers that need to manage authentication concerns.
 */
    .factory('AuthenticatingController', function (userModel, $state, $q) {
        function AuthenticatingController() {

            this.checkLogin = function () {
                var deferred = $q.defer();
                if (!userModel.user) {
                    deferred.reject(new Error("User is not logged in"));
                }

                deferred.resolve(userModel.user);

                return deferred.promise;
            }
        }

        return AuthenticatingController;
    })
;
