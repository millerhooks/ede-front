angular.module('edepo.activity-stream', [
    'ui.router',
    'edepo.activity-stream.activity-ticket'
])
.config(function($stateProvider) {
    $stateProvider
    .state('app.activity-stream', {
        url: '',
        templateUrl: 'activity-stream/activity-stream.tpl.html',
        controller: "ActivityStreamCtrl",
        edepoBreadcrumb: {
            label: "Activity Stream",
            searchName: 'Activity Stream',
            isRoot: true
        }
    });
})
.controller('ActivityStreamCtrl', function($scope, $http, ActivityTicketModel) {
    fetchStream();

    /*
     * Query for stream items
     * Only update scope if stream has changed
     */
    function fetchStream() {
        // Query for tickets
        ActivityTicketModel.all({lazy: true}).then(function(res) {
            if ($scope.tickets != res)
                // TODO: We should only update if the contents have changed, do this smarter
                $scope.tickets = res;
        });
    }

})
;