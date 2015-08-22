/**
 * Created by mhooks on 10/29/14.
 */
angular.module('edepo.cases', [
    'ui.router',
    'edepo.cases.transcripts'
])
.config(function($stateProvider) {
    $stateProvider
    // Abstract state for views involving a specific case
    // Resolves the currentCase for use by child states
    .state('app.cases', {
        abstract: true,
        url: 'cases/{caseId:[0-9]{1,32}}',
        resolve: {
            currentCase: function($stateParams, CaseModel) {
                console.log('Resolving currentCase');
                return CaseModel.find({id: parseInt($stateParams.caseId)}, {lazy: true});
            }
        },
        template: '<ui-view></ui-view>',
        edepoBreadcrumb: {
            label: "{{currentCase.name}}",
            parent: "app.activity-stream"
        }
    })
    .state('app.cases.detail', {
        url: '',
        controller: 'CaseCtrl',
        templateUrl: 'cases/cases.tpl.html',
        edepoBreadcrumb: {
            label: "case + {{currentCase.name}}",
            searchName: 'Case',
            parent: "app.activity-stream"
        }
    })
})

.controller('CaseCtrl', function($scope, currentCase) {
    $scope.currentCase = null;

    if (!currentCase) {
        console.log('CaseCtrl: no currentCase passed!')
        // TODO: handle no id
    }

    setCurrentCase(currentCase);

    console.log($scope);

    //////
    // Current Case
    // _case is used instead of case to avoid conflict
    /////


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