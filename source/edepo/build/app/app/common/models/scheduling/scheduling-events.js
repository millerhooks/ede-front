/**
 * Created by mhooks on 10/24/14.
 */

angular.module('edepo.models.scheduling.events', [

])
    .service('eventsModel', function EventsModel($http, $q) {
        var URLS = {
                FETCH: 'data/scheduling.json'
            },
            events,
            eventsModel = this;

        function extract(result) {
            return result.data;
        }

        function cacheEvents(result) {
            events = extract(result);
            return events;
        }

        eventsModel.getEvents = function () {
            return (events) ? $q.when(events) : $http.get(URLS.FETCH).then(cacheEvents);
        };

        function findEvent(eventId) {
            return _.find(events, function (event) {
                return event.id === parseInt(eventId, 10);
            })
        }

        eventsModel.getEventById = function (eventId) {
            var deferred = $q.defer();
            if (events) {
                deferred.resolve(findEvent(eventId))
            } else {
                eventsModel.getEvents().then(function () {
                    deferred.resolve(findEvent(eventId))
                })
            }
            return deferred.promise;
        };

        eventsModel.createEvent = function (event) {
            event.id = events.length;
            events.push(event);
        };

        eventsModel.updateEvent = function (event) {
            var index = _.findIndex(events, function (b) {
                return b.id == event.id
            });
            events[index] = event;
        };

        eventsModel.deleteEvent = function (event) {
            _.remove(events, function (b) {
                return b.id == event.id;
            });
        };

        /*
         eventsModel.getEventsForCategory = function (category) {
         _.filter(events, function (b) {
         return b.category == category;
         });
         };
         */
    })
;
