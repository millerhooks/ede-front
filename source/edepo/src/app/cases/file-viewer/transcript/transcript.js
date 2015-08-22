/**
 * Created by mhooks on 10/28/14.
 */
angular.module('edepo.cases.file-viewer.transcript', [
    'ui.router'
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('transcript', {
                url: '/transcripts/file-viewer/transcript',
                templateUrl: 'transcripts/file-viewer/transcript.tpl.html'
            });
    })