angular.module('edepo.account.login', [
    'ui.router'
])

.config(function ($stateProvider) {
    $stateProvider
        .state('app.login', {
            url: 'login',
            controller: 'LoginCtrl',
            templateUrl: 'account/login/login.tpl.html',
            edepoBreadcrumb: {
                label: "Login"
            }
        });
})

.controller('LoginCtrl', function ($scope, UserSession) {
    $scope.getCredentials = function(){
        return {username: $scope.username, password: $scope.password};
    };

    $scope.login = function(){
        UserSession.login($scope.username, $scope.password).
        then(function(data){
            // on good username and password
            console.log(data);
            if ('success' in data && data.success == true) {
                // TODO: We need to get the real user model
                $scope.user = UserSession.user;
            }
        }).
        catch(function(data){
            console.log(data);
            // on incorrect username and password
            alert(data.data.detail);
        });
    };

    $scope.logout = function(){
        UserSession.logout(function(){
            $scope.user = undefined;
        });
    };
})

.controller('ModalLoginCtrl', function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'loginModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
})

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
