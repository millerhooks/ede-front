/**
 * Created by peter on 11/19/14.
 */
function getParameterByName(name, url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

angular.module('edepo.models.active-resource', [
    'ActiveResource',
    'edepo.models.active-resource.serializer',
])
.provider('EdepoBaseModel', function () {
    this.$get = [
        'ARAPI',
        'ARCollection',
        'ARAssociation',
        'ARAssociations',
        'ARCache',
        'AREventable',
        'ARValidations',
        '$http',
        '$q',
        '$injector',
        'ARDeferred',
        'ARGET',
        'ARMixin',
        'URLify',
        'ARHelpers',
        'ARBase',
        function (API, Collection, Association, Associations, Cache, Eventable, Validations, $http, $q, $injector, deferred, GET, mixin, URLify, Helpers, ARBase) {
            function EdepoBase() {
                var _this = this;


                _this.inherits(ARBase);
                //serializer = new Serializer();
                _this.api.singular = _this.name.toLowerCase()
                _this.api.set = function (url) {
                    // Overrides API.set
                    // Removes pluralization from URL generation
                    if (url.slice(-1) != '/')
                        url = url + '/';
                    this.createURL = url + this.singular + '/';
                    this.updateURL = this.showURL = this.deleteURL = url + this.singular + '/:' + _this.primaryKey + '/';
                    this.indexURL = url + this.singular + '/';
                    return this;
                };
                _this.testing = function() {
                    console.log('ok');
                };
                _this.meta = {};
                _this.next = function (terms, options) {
                    _this.emit('next:called');

                    if (typeof terms != 'object')
                        terms = {};

                    if (_this.meta && _this.meta.next) {
                        var offset = getParameterByName('offset', _this.meta.next);
                        terms.offset = offset;
                    }

                    return _this.where(terms, options).then(function (results) {
                        var deferred = $q.defer();
                        deferred.resolve(results);
                        _this.emit('next:complete', results);
                        return deferred.promise;
                    });
                };

                //mixin(_this, ARBase, false);
                //_this.api = {set: function(somethings, els) { console.log(somethings)}};

                // Model#where(terms, options)
                //
                // @param {terms} - JSON terms used to find all instances of an object matching specific parameters
                //
                // Used to find all instances of a model matching specific parameters:
                //
                //    System.where({placement: "window"})
                //
                // Returns a collection of system instances where the placement attribute is set to "window"
                _this.where = function (terms, options) {
                    // Generate start event
                    _this.emit('where:called', terms);
                    // Normalize variables
                    if (typeof terms != 'object')
                        throw 'Argument to where must be an object';
                    if (!options)
                        options = {
                            lazy: false,
                            overEager: false,
                            api: true,
                            all: false
                        };
                    var cached = _this.cached.where(terms);
                    options.cached = cached;
                    options.multi = true;
                    var url = _this.api.indexURL || _this.api.showURL;
                    // Generate a GET request for all instances matching the given params, deserialize each
                    // into the appropriate class, and return the found collection
                    return GET(_this, url, terms, options).then(function (json) {
                        var results = [];
                        // TODO: Deal with meta, pagination, etc.
                        var meta = {};
                        if (json && 'meta' in json && 'objects' in json)  {
                            meta = json.meta;
                            results.meta = json.meta;
                            if (meta && meta.next) {
                                results.next = function() {
                                    _this.emit('next:called');

                                    if (typeof terms != 'object')
                                        terms = {};

                                    if (meta && meta.next) {
                                        var offset = getParameterByName('offset', meta.next);
                                        terms.offset = offset;
                                    }

                                    return _this.where(terms, options).then(function (results) {
                                        var deferred = $q.defer();
                                        deferred.resolve(results);
                                        _this.emit('next:complete', results);
                                        return deferred.promise;
                                    });
                                };
                            }
                            json = json.objects;
                        }
                        for (var i in json) {
                            var instance = _this.new(json[i]);
                            results.push(instance);
                            serializer.deserialize(json[i], instance, options);
                        }
                        // Watch all collections that get assigned out as variables
                        _this.watchedCollections.push(results);
                        _this.emit('where:complete', {
                            instance: results,
                            data: json
                        });
                        return results;
                    });
                };

                return _this;
            }
            return EdepoBase;
        }
    ];
})
.provider('EdepoActiveResource', function () {
    this.$get = [
        'EdepoBaseModel',
        function (EdepoBase) {
            EdepoActiveResource = {};
            EdepoActiveResource.Base = EdepoBase;
            return EdepoActiveResource;
        }
    ];
});