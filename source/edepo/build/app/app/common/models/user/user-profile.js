/*
 * TODO:
 * We need PKs or otherwise unique fields before we can use the user model
 * Example user, from auth:
 * {"profile": {"user": {"first_name": "Karl", "last_name": "Seelbach", "email": "karl@edepo.com", "last_login": "Mon, 24 Nov 2014 19:24:23 +0000", "date_joined": "Sun, 10 Mar 2013 21:24:35 +0000"}, "company_name": "Winstead PC", "phone_number": "512-370-2864", "address_1": "401 Congress Ave.", "address_2": "Suite 2100", "city": "Austin", "state": "TX", "zip_code": "78701", "date_created": "Sun, 10 Mar 2013 21:24:35 +0000", "date_modified": "Mon, 24 Nov 2014 19:24:23 +0000"}, "success": true}
 *
 */

angular.module('edepo.models.user-profile', [
    'edepo.config.constants'
])
.factory('UserProfileModel', function(EdepoActiveResource, config) {

    function Profile(data) {
        this.number('id');
        this.string('company_name');
        this.string('phone_number');
        this.string('address_1');
        this.string('address_2');
        this.string('city');
        this.string('state');
        this.string('zip_code');

        this.computedProperty('fullAddress', function() {
        return this.address_1 + "\n" +
               (this.address_2 ? this.address_2 + "\n" : "") +
               this.city + ", " + this.state + " " + this.zip_code;
        }, ['address_1', 'address_2', 'city', 'state', 'zip_code']);

        this.hasOne('user', {provider: 'UserModel'});
    };

    Profile.inherits(EdepoActiveResource.Base);
    Profile.api.set(config.baseApiUrl);

    return Profile;
});



