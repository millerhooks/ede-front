/**
 * Created by mhooks on 10/24/14.
 */

angular.module('edepo.scheduling', [
    'ui.router',
    'edepo.scheduling.calendar'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.scheduling', {
                url: 'scheduling',
                templateUrl: 'scheduling/scheduling.tpl.html'
            })
    })

    .controller('ScheduleCtrl', function ($scope, $http) {

        $http.get('/assets/data/full-transcripts.json')
            .then(function (res) {
                $scope.cases = res.data;

            })

        console.log($scope);

        //////
        // Current Event
        // event is used instead of case to avoid conflict
        /////

        $scope.currentEvent = null;

        function setCurrentEvent(event) {
            $scope.currentEvent = event;
        }

        function isCurrentEvent(event) {
            //console.log(event)
            return $scope.currentEvent !== null && event.name === $scope.currentEvent.name;

            //return null
        }

        $scope.setCurrentEvent = setCurrentEvent;
        $scope.isCurrentEvent = isCurrentEvent;



        /////
        // States Dawg
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