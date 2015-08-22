var getExpression = function(interpolationFunction) {
    if (interpolationFunction.expressions) {
        return interpolationFunction.expressions;
    } else {
        var expressions = [];
        angular.forEach(interpolationFunction.parts, function(part) {
            if (angular.isFunction(part)) {
                expressions.push(part.exp);
            }
        });
        return expressions;
    }
};

var registerWatchers = function(labelWatcherArray, interpolationFunction, viewScope, step) {
    // Watches state labels, updates on change
    angular.forEach(getExpression(interpolationFunction), function(expression) {
        var watcher = viewScope.$watch(expression, function() {
            step.edepoBreadcrumbLabel = interpolationFunction(viewScope);
        });
        labelWatcherArray.push(watcher);
    });

};

var deregisterWatchers = function(labelWatcherArray) {
    // Resets label watchers
    angular.forEach(labelWatcherArray, function(deregisterWatch) {
        deregisterWatch();
    });
    labelWatcherArray = [];
};


angular.module('edepo.components.breadcrumb', ['ui.router.state'])
.provider('$breadcrumb', function() {
    /*
     * Inspired and repurposed from
     * http://milestone.topics.it/2014/03/angularjs-ui-router-and-breadcrumbs.html
     * https://github.com/ncuillery/angular-breadcrumb/
     */
    var $$options = {
        prefixStateName: null,
        includeAbstract: false
    };

    this.setOptions = function(options) {
        angular.extend($$options, options);
    };

    this.$get = ['$state', '$stateParams', '$rootScope', function($state, $stateParams, $rootScope) {

        var $lastViewScope = $rootScope;

        function isAOlderThanB(scopeA, scopeB) {
            if (angular.equals(scopeA.length, scopeB.length)) {
                return scopeA > scopeB;
            } else {
                return scopeA.length > scopeB.length;
            }
        }

        function parseStateRef(ref) {
            var parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
            if (!parsed || parsed.length !== 4) {
                throw new Error("Invalid state ref '" + ref + "'");
            }
            return {state: parsed[1], paramExpr: parsed[3] || null};
        }

        // Early catch of $viewContentLoaded event
        $rootScope.$on('$viewContentLoaded', function(event) {
            // With nested views, the event occur several times, in "wrong" order
            if (isAOlderThanB(event.targetScope.$id, $lastViewScope.$id)) {
                $lastViewScope = event.targetScope;
            }
        });

        // Get the parent state
        var $$parentState = function(state) {
            // Check if state has explicit parent OR we try guess parent from its name
            var name = state.parent || (/^(.+)\.[^.]+$/.exec(state.name) || [])[1];
            // If we were able to figure out parent name then get this state
            return name;
        };

        // Add the state in the chain if not already in and if not abstract
        var $$addStateInChain = function(chain, stateRef) {
            var conf,
            parentParams,
            ref = parseStateRef(stateRef);

            for (var i = 0, l = chain.length; i < l; i += 1) {
                if (chain[i].name === ref.state) {
                    return;
                }
            }

            conf = $state.get(ref.state);
            if ((!conf.abstract || $$options.includeAbstract || conf.edepoBreadcrumb) && !(conf.edepoBreadcrumb && conf.edepoBreadcrumb.skip)) {
                if (ref.paramExpr) {
                    parentParams = $lastViewScope.$eval(ref.paramExpr);
                }

                conf.edepoBreadcrumbLink = '/#' + $state.href(ref.state, parentParams || $stateParams || {});
                conf.searchName = (conf.edepoBreadcrumb && conf.edepoBreadcrumb.searchName) || '';
                //conf.isRoot = !!(conf.edepoBreadcrumb && conf.edepoBreadcrumb.isRoot);
                chain.unshift(conf);
            }
        };

        // Get the state for the parent step in the breadcrumb
        var $$breadcrumbParentState = function(stateRef) {
            var ref = parseStateRef(stateRef),
            conf = $state.get(ref.state);

            if (conf.edepoBreadcrumb && conf.edepoBreadcrumb.parent) {
                // Handle the "parent" property of the breadcrumb, override the parent/child relation of the state
                var isFunction = typeof conf.edepoBreadcrumb.parent === 'function';
                var parentStateRef = isFunction ? conf.edepoBreadcrumb.parent($lastViewScope) : conf.edepoBreadcrumb.parent;
                if (parentStateRef) {
                    return parentStateRef;
                }
            }

            return $$parentState(conf);
        };

        return {
            getStatesChain: function(exitOnFirst) { // Deliberately undocumented param, see getLastStep
                var chain = [];

                // From current state to the root
                for (var stateRef = $state.$current.self.name; stateRef; stateRef = $$breadcrumbParentState(stateRef)) {
                    $$addStateInChain(chain, stateRef);
                    if (exitOnFirst && chain.length) {
                        return chain;
                    }
                }

                // Prefix state treatment
                if ($$options.prefixStateName) {
                    $$addStateInChain(chain, $$options.prefixStateName);
                }

                return chain;
            },

            getLastAndCurrentState: function() {
                var chain = [];
                var results = {current: {}, last: {}};

                // Find the first state above this one (or use this one)
                for (var stateRef = $state.$current.self.name; stateRef; stateRef = $$breadcrumbParentState(stateRef)) {
                    $$addStateInChain(chain, stateRef);
                    if (stateRef == $state.$current.self.name && chain.length) {
                        results.current =  chain[0];
                    }
                    else if (stateRef != $state.$current.self.name && chain.length) {
                        // Not the current state, we want to be at least 1 state deep.
                        results.last = chain[0];
                        if (results.last.name == $state.$current.self.name)
                        // If the last relevant state is still this state, mark it as root (no link)
                            results.last.isRoot = true;
                        else
                            results.last.isRoot = false;
                        return results;
                    }
                }

                return results;
            },

            getLastStep: function() {
                var chain = this.getStatesChain(true);
                return chain.length ? chain[0] : undefined;
            },

            $getLastViewScope: function() {
                return $lastViewScope;
            }
        };
    }];
})
.directive('edepoBreadcrumb', function($interpolate, $breadcrumb, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'common/components/breadcrumb/breadcrumb.tpl.html',
        link: {
            post: function postLink(scope) {
                var labelWatchers = [];

                var renderBreadcrumb = function() {
                    deregisterWatchers(labelWatchers);
                    var viewScope = $breadcrumb.$getLastViewScope();
                    var states = $breadcrumb.getLastAndCurrentState();
                    scope.last = states.last;
                    scope.current = states.current;
                    //scope.backStep = $breadcrumb.getLastStep();
                    //scope.steps = [scope.backStep.parent];

                    if (scope.last.edepoBreadcrumb && scope.last.edepoBreadcrumb.label) {
                        var parseLabel = $interpolate(scope.last.edepoBreadcrumb.label);
                        scope.last.edepoBreadcrumbLabel = parseLabel(viewScope);
                        // Watcher for further viewScope updates
                        registerWatchers(labelWatchers, parseLabel, viewScope, scope.last);
                    } else
                        scope.last.edepoBreadcrumbLabel = scope.last.name;
                };

                $rootScope.$on('$viewContentLoaded', function() {
                    renderBreadcrumb();
                });

                // View(s) may be already loaded while the directive's linking
                renderBreadcrumb();
            }
        }
    }
})
;
