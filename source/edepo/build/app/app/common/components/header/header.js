angular.module('edepo.components.header', [])
.directive('edepoHeader', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'common/components/header/header.tpl.html'
    }
})
;
