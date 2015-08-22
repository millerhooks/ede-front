angular.module('edepo.models.deposition', [
    'edepo.config.constants'
])
.factory('DepositionModel', function(EdepoActiveResource, config) {
    function Deposition(data) {
        this.number('id');
        this.string('created');
        this.string('deponent');
        this.string('deposition_date');
        this.string('encoded_video');
        this.string('modified');
        this.string('transcript');
        this.string('transcript_xml');
        this.string('case');

        this.belongsTo('case', {provider: 'CaseModel', foreignKey: 'case_id'});
        this.hasMany('exhibits', {provider: 'ExhibitModel'});
        this.hasMany('segments', {provider: 'SegmentModel'});
    };

    Deposition.inherits(EdepoActiveResource.Base);
    Deposition.api.set(config.baseApiUrl);

    // TODO: Do we want to cascade on deletion?
    //Deposition.dependentDestroy('exhibits');

    return Deposition;
});
