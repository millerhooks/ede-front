/**
 * Adds a timestamp to angular's $log
 */
angular.module('enhanced.logging', [])
    .run(function ($rootScope, $log) {
        var prepareLogFn = function (logFn) {
            var enhancedLogFn = function () {
                var modifiedArguments = Array.prototype.slice.call(arguments);
                modifiedArguments[0] = [moment().format() + ' '] + modifiedArguments[0];
                logFn.apply(null, modifiedArguments);
            };

            enhancedLogFn.logs = [ ];

            return enhancedLogFn;
        };

        $log.log = prepareLogFn($log.log);
        $log.info = prepareLogFn($log.info);
        $log.warn = prepareLogFn($log.warn);
        $log.debug = prepareLogFn($log.debug);
        $log.error = prepareLogFn($log.error);

        $rootScope.$log = $log;
    })
;
