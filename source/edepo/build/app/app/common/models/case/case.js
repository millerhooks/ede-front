/**
 * Created by mhooks on 10/24/14.
 */

angular.module('edepo.models.case', [
    'edepo.config.constants',
    'ActiveResource'
])
.factory('CaseModel', function(EdepoActiveResource, config) {
    function Case(data) {
        this.number('id');
        this.string('attorneys');
        this.string('court');
        this.string('created');
        this.string('defendant');
        this.boolean('deleted');
        this.string('deleted_timestamp');
        this.string('modified');
        this.string('name');
        this.string('plaintiff');
        this.string('resource_uri');
        this.string('name');

        this.hasMany('depositions', {provider: 'DepositionModel', foreignKey: 'case_id'});
    };

    Case.inherits(EdepoActiveResource.Base);

    Case.api.set(config.baseApiUrl, {format: 'json'});

    return Case;
})
;
