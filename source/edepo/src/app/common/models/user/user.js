angular.module('edepo.models.user', [
    'edepo.config.constants',
    'ActiveResource'
])
.factory('UserModel', function(ActiveResource, config) {
    function User(data) {
        this.number('id');
        this.string('username');
        this.string('name');
        this.string('avatar');
        /*
         this.computedProperty('fullTitle', function() {
         return this.title + this.subtitle;
         }, ['title', 'subtitle']);
         */
        //this.hasMany('');
        //this.belongsTo('activityTicket', {provider: 'ActivityTicketModel'});
    };

    User.inherits(EdepoActiveResource.Base);
    User.api.set(config.baseApiUrl);
    //UserModel.dependentDestroy('');

    return User;
});