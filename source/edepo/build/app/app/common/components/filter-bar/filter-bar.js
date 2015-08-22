angular.module('edepo.components.filter-bar', ['ui.router.state'])
.directive('edepoFilterBar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'common/components/filter-bar/filter-bar.tpl.html'
    }
})
;
