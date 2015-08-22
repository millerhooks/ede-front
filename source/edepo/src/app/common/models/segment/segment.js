angular.module('edepo.models.segment', [
    'edepo.config.constants'
])
.factory('SegmentModel', function(EdepoActiveResource, config) {
    function Segment(data) {
        this.number('id');
        this.number('original_media');
        this.string('encoded_audio');

        this.belongsTo('deposition', {provider: 'DepositionModel'});
    };

    Segment.inherits(EdepoActiveResource.Base);
    Segment.api.set(config.baseApiUrl);

    return Segment;
});