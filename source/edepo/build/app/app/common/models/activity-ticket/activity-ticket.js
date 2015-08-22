angular.module('edepo.models.activity-ticket', [
    'edepo.config.constants'
])
.factory('ActivityTicketModel', function(EdepoActiveResource, config) {
    function ActivityTicket(data) {
        this.number('id');
        this.string('message_class');
        this.string('message');
        this.string('icon');

        //this.hasMany('user', {provider: 'UserModel'});
        //this.hasMany('depositions', {provider: 'TranscriptModel'});
    };

    ActivityTicket.inherits(EdepoActiveResource.Base);
    ActivityTicket.api.set(config.baseApiUrl, {format: 'json'});

    return ActivityTicket;
})
;
