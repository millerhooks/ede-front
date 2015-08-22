angular.module('edepo.components.sidebar', [
    'edepo.components.sidebar.case-list',
    'edepo.components.sidebar.event-list',
    'edepo.components.sidebar.job-list'
])
.directive('edepoSidebar', function() {
    return {
        restrict: 'E',
        templateUrl: 'common/components/sidebar/sidebar.tpl.html',
        replace: true,
        controller: 'SidebarMenuCtrl'
    }
}).controller('SidebarMenuCtrl', function($scope, CaseModel) {
    //$scope.showMenu = true;
})
;
