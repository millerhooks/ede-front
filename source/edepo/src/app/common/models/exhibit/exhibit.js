/**
 * Created by peter on 11/7/14.
 */
angular.module('edepo.models.exhibit', [
    'edepo.config.constants',
    'ActiveResource'
])
.factory('ExhibitModel', function(EdepoActiveResource, config) {
    function Exhibit(data) {
        this.number('id');
        this.string('description');
        this.string('file');
        this.string('name');


        // Can modify data potentially?
        //this.computedProperty('transcriptId', function() {
        //    if (this.transcript != undefined)
        //        return this.transcript.substr(this.transcript.lastIndexOf('/') + 1);
        //    else
        //        return undefined;
        //}, 'transcript');


        this.belongsTo('deposition', {provider: 'DepositionModel'});
    };

    Exhibit.inherits(EdepoActiveResource.Base);
    Exhibit.api.set(config.baseApiUrl);

    return Exhibit;
});