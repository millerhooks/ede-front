angular.module('edepo.components.sidebar.job-list', [
    'ui.router'
])
.directive('edepoJobListSidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'common/components/sidebar/job-list/job-list.tpl.html',
        replace: true,
        controller: 'JobListCtrl'
    }
})
.controller('JobListCtrl', function($scope, $http) {
    //
    //JobModel.all().then(function(res) {
    //    $scope.jobs = res;
    //});


});