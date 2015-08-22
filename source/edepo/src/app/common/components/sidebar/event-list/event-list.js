angular.module('edepo.components.sidebar.event-list', [
    'ui.router'
])
.directive('edepoEventListSidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'common/components/sidebar/event-list/event-list.tpl.html',
        replace: true,
        controller: 'EventListCtrl'
    }
})
.controller('EventListCtrl', function($scope, $http) {

    //EventModel.all().then(function(res) {
    //    $scope.events = res;
    //});


});