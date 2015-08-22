
angular.module('edepo.cases.transcripts', [
    'ui.router'
])
.config(function ($stateProvider) {
    $stateProvider
        .state('app.cases.transcripts', {
            url: '/transcripts/{transcriptId:[0-9]{1,32}}',
            controller: 'TranscriptCtrl',
            templateUrl: 'cases/transcripts/transcripts.tpl.html',
            resolve: {
                currentTranscript: function(currentCase, $stateParams, DepositionModel) {
                    // This will resolve the transcript in the current case
                    //return currentCase.depositions.find({id: parseInt($stateParams.transcriptId)}, {lazy:true});

                    // Depending on API nesting implementation, we might want to just query instead:
                    return DepositionModel.find({id: parseInt($stateParams.transcriptId)}, {lazy:true});
                }
            },
            edepoBreadcrumb: {
                label: "{{currentTranscript.deponent}}",
                searchName: 'Deposition'
            }
        })
}).controller('TranscriptCtrl', function ($scope, currentTranscript, currentCase) {
    $scope.currentTranscript = null;
    $scope.currentCase = currentCase;

    if (!currentTranscript) {
        // TODO: handle no id
        console.log('TranscriptCtrl: no currentTranscript');
    }

    setCurrentTranscript(currentTranscript);

    console.log($scope);

    //////
    // Current Transcript
    //////

    function setCurrentTranscript(transcript) {
        $scope.currentTranscript = transcript;
    }

    function isCurrentTranscript(transcript) {
        return $scope.currentTranscript !== null && transcript.deponent === $scope.currentTranscript.deponent;
        //return null
    }
});


