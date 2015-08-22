/**
 * Created by mhooks on 10/29/14.
 */
angular.module('edepo.components.sidebar.case-list', [
    'ui.router'
])
.directive('edepoCaseListSidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'common/components/sidebar/case-list/case-list.tpl.html',
        replace: true,
        controller: 'CaseListCtrl'
    }
}).controller('CaseListCtrl', function($scope, $http, CaseModel) {

    CaseModel.all({lazy: true}).then(function(res) {
        $scope.cases = res;
        $scope.cases.next().then(function(res) {
            $scope.cases = $scope.cases.concat(res);
            console.log($scope.cases);
        });
    });

    console.log($scope);

    //////
    // Current Case
    // _case is used instead of case to avoid conflict
    /////

    $scope.currentCase = null;

    function setCurrentCase(_case) {
        $scope.currentCase = _case;
    }

    function isCurrentCase(_case) {
        //console.log(_case)
        return $scope.currentCase !== null && _case.name === $scope.currentCase.name;

        //return null
    }

    $scope.setCurrentCase = setCurrentCase;
    $scope.isCurrentCase = isCurrentCase;


    //////
    // Current Deposition
    //////
    $scope.currentDeposition = null;

    function setCurrentDeposition(deposition) {
        $scope.currentDeposition = deposition;

    }

    function isCurrentDeposition(deposition) {
        return $scope.currentDeposition !== null && deposition.deponent === $scope.currentDeposition.deponent;
        //return null
    }

    $scope.setCurrentDeposition = setCurrentDeposition;
    $scope.isCurrentDeposition = isCurrentDeposition;


    /////
    // States DAwg
    /////


    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function startEditing() {
        $scope.isEditing = false;
    }

    function shouldShowCreating() {
        return $scope.currentDeposition && !$scope.isEditing;
    }

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;

});