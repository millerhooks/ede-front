/**
 * Created by mhooks on 10/28/14.
 */
angular.module('edepo.cases.file-viewer', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('file-viewer', {
                url: '/transcripts/file-viewer',
                templateUrl: 'transcripts/file-viewer.tpl.html'
            });
    })