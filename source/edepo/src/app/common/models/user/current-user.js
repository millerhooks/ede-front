angular.module('edepo.models.current-user', [
    'edepo.config.constants',
    'ActiveResource'
])
.factory('CurrentUser', function(ActiveResource, config) {
    function UserModel(data) {
        this.number('id');
        this.string('name');
        /*
         this.computedProperty('fullTitle', function() {
         return this.title + this.subtitle;
         }, ['title', 'subtitle']);
         */
        //this.hasMany('');
    };

    UserModel.inherits(ActiveResource.Base);
    UserModel.api.set(config.baseApiUrl);
    //UserModel.dependentDestroy('');

    return UserModel;
});