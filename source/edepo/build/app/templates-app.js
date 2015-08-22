(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app.tpl.html',
    '<div style="padding-top: 5px; padding-left: 5px">\n' +
    '  <div class="ui-view"></div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('account/account.tpl.html',
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('activity-stream/activity-stream.tpl.html',
    '<div ng-repeat="ticket in tickets">\n' +
    '    <edepo-activity-ticket ticket="ticket"></edepo-activity-ticket>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cases/cases.tpl.html',
    '<div class="row">\n' +
    '\n' +
    '    <div class="col-sm-9 col-md-10 main" ng-if="currentCase">\n' +
    '\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div>\n' +
    '                <p>Case Name</p>\n' +
    '\n' +
    '                <h1 class="page-header">{{currentCase.name}}</h1>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="pull-right">\n' +
    '                <p>created: {{currentCase.created}} modified: {{currentCase.modified}}</p>\n' +
    '\n' +
    '                <div class="row">\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="pull-right">\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-comment"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-share-alt"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-trash"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-exclamation-sign"></span>\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                    <button type="button" class="btn btn-default" ng-repeat="depo in currentCase.depositions">\n' +
    '                        <a ui-sref="app.cases.transcripts({caseiD: currentCase.id, transcriptId: depo.id})" ng-click="setCurrentDeposition(depo)">{{depo.deponent}}</a>\n' +
    '                    </button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '          \n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="row placeholders">\n' +
    '            <div class="col-xs-6 col-sm-3">\n' +
    '                <img data-src="holder.js/200x200/auto/sky" class="img-responsive" alt="Generic placeholder thumbnail">\n' +
    '                <h4>Label</h4>\n' +
    '                <span class="text-muted">Something else</span>\n' +
    '            </div>\n' +
    '            <div class="col-xs-6 col-sm-3 pull-right">\n' +
    '                <!--\n' +
    '                    <ul class="nav nav-sidebar">\n' +
    '                        <li ng-repeat="depo in currentCase.transcripts">\n' +
    '                            <a href ng-click="setCurrentDeposition(depo)">{{depo.deponent}}</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home/home.tpl.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scheduling/scheduling.tpl.html',
    '<div ng-controller="ScheduleCtrl">\n' +
    '    Scheduling stub\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('account/login/login.tpl.html',
    '<div>\n' +
    '    <div class="theme-showcase" role="main">\n' +
    '        <div class="jumbotron">\n' +
    '            <div ng-show="user" class="navbar-form navbar-right">\n' +
    '                <input type="submit" class="btn btn-default" ng-click="logout()"\n' +
    '                       value="logout {{user}}"/>\n' +
    '            </div>\n' +
    '            <div ng-hide="user">\n' +
    '                <form id="id_auth_form" class=""\n' +
    '                      ng-submit="login()">\n' +
    '                    <div class="form-group">\n' +
    '                        <input ng-model="username" required name="username"\n' +
    '                               type="text" placeholder="username" class="form-control">\n' +
    '                    </div>\n' +
    '                    <div class="form-group">\n' +
    '                        <input ng-model="password" required name="password" type="password"\n' +
    '                               placeholder="password" class="form-control">\n' +
    '                    </div>\n' +
    '                    <div class="btn-group">\n' +
    '                        <input type="submit" class="btn btn-default" value="login">\n' +
    '                        <input type="submit" class="btn btn-default" value="register"\n' +
    '                               ng-click="register($event)">\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('account/settings/settings.tpl.html',
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('account/sharing-history/sharing-history.tpl.html',
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('activity-stream/activity-ticket/activity-ticket.tpl.html',
    '<div class="message-holder">\n' +
    '    <div class="left-part">\n' +
    '        <a href="#">\n' +
    '								<span class="userpic">\n' +
    '									<img alt="" src="assets/images/temp/userpic-01.jpg">\n' +
    '								</span>\n' +
    '        </a>\n' +
    '    </div><!-- left-part -->\n' +
    '\n' +
    '    <div class="content-part">\n' +
    '        <div class="title-holder">\n' +
    '            <div class="publication-date-holder">\n' +
    '                12m\n' +
    '            </div><!-- publication-date-holder -->\n' +
    '\n' +
    '            <div class="title-box">\n' +
    '                <h4 class="title">{{ ticket.user.name }} commented on Boo Boo’s deposition</h4>\n' +
    '            </div><!-- title-box -->\n' +
    '        </div><!-- title-holder -->\n' +
    '\n' +
    '        <div class="content-body">\n' +
    '            <p>"{{ ticket.message }}"</p>\n' +
    '        </div><!-- content-body -->\n' +
    '\n' +
    '        <div class="comments-shares-holder">\n' +
    '            <div class="comments-shares-box">\n' +
    '                <a href="#" class="comments-number">7 comments</a>\n' +
    '                <a href="#" class="shares-number">5 shares</a>\n' +
    '            </div><!-- comments-number -->\n' +
    '\n' +
    '            <div class="message-actions-box">\n' +
    '                <a href="#" class="comment">\n' +
    '                    <i class="fontello-comment icon"></i>\n' +
    '                </a>\n' +
    '\n' +
    '                <a href="#" class="share">\n' +
    '                    <i class="fontello-share icon"></i>\n' +
    '                </a>\n' +
    '\n' +
    '                <a href="#" class="delete">\n' +
    '                    <i class="fontello-trash icon"></i>\n' +
    '                </a>\n' +
    '\n' +
    '                <a href="#" class="flag">\n' +
    '                    <i class="fontello-flag icon"></i>\n' +
    '                </a>\n' +
    '            </div><!-- message-actions-box -->\n' +
    '        </div><!-- comments-holder -->\n' +
    '    </div><!-- content-part -->\n' +
    '</div><!-- message-holder -->');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cases/transcripts/transcripts.tpl.html',
    '<div class="row">\n' +
    '\n' +
    '    <div class="col-sm-9 col-md-10 main" ng-if="currentTranscript">\n' +
    '\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div>\n' +
    '                <p>Deponent Name</p>\n' +
    '\n' +
    '                <h1 class="page-header">{{currentTranscript.deponent}}</h1>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="pull-right">\n' +
    '                <p>created: {{currentTranscript.created}} modified: {{currentTranscript.modified}}</p>\n' +
    '\n' +
    '                <div class="row">\n' +
    '\n' +
    '                </div>\n' +
    '                <div class="row">\n' +
    '                    <div class="pull-right">\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-comment"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-share-alt"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-trash"></span>\n' +
    '                        </button>\n' +
    '                        <button type="button" class="btn btn-default btn-lg">\n' +
    '                            <span class="glyphicon glyphicon-exclamation-sign"></span>\n' +
    '                        </button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-4 col-md-4 btn-group-vertical pull-right">\n' +
    '                <p>Exhibits</p>\n' +
    '                <a class="btn btn-default" ng-repeat="exhibit in currentTranscript.exhibits">{{exhibit.name}} {{exhibit.description}} <span class="glyphicon glyphicon-chevron-right pull-right"></span></a>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4 col-md-4 btn-group-vertical pull-left">\n' +
    '                <p>Segments</p>\n' +
    '                <a class="btn btn-default" ng-repeat="segment in currentTranscript.segments">{{segment.original_media}} {{segment.encoded_audio}} <span class="glyphicon glyphicon-chevron-right pull-right"></span></a>\n' +
    '            </div>\n' +
    '\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="row placeholders">\n' +
    '            <div class="col-xs-6 col-sm-3">\n' +
    '                <img data-src="holder.js/200x200/auto/sky" class="img-responsive" alt="Generic placeholder thumbnail">\n' +
    '                <h4>Label</h4>\n' +
    '                <span class="text-muted">Something else</span>\n' +
    '            </div>\n' +
    '            <div class="col-xs-6 col-sm-3 pull-right">\n' +
    '                <!--\n' +
    '                    <ul class="nav nav-sidebar">\n' +
    '                        <li ng-repeat="depo in currentCase.transcripts">\n' +
    '                            <a href ng-click="setCurrentTranscript(depo)">{{depo.deponent}}</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                -->\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scheduling/calendar/calendar.tpl.html',
    '<div ng-controller="CalendarCtrl">\n' +
    '\n' +
    '    <div ui-calendar="uiConfig.calendar" class="span8 calendar" ng-model="eventSources"></div>\n' +
    '\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('scheduling/events/events.tpl.html',
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('cases/file-viewer/transcript/transcript.tpl.html',
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head lang="en">\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title></title>\n' +
    '</head>\n' +
    '<body>\n' +
    '\n' +
    '</body>\n' +
    '</html>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/breadcrumb/breadcrumb.tpl.html',
    '<section class="breadcrumb-bar">\n' +
    '    <div class="breadcrumbs">\n' +
    '        <a ng-if="!last.isRoot" href="{{ last.edepoBreadcrumbLink }}"><span class="glyphicon glyphicon-chevron-left"> </span> {{ last.edepoBreadcrumbLabel }}</a>\n' +
    '        <span ng-if="last.isRoot">{{ last.edepoBreadcrumbLabel }}</span>\n' +
    '    </div><!-- breadcrumbs -->\n' +
    '\n' +
    '    <div class="search-field" ng-if="current.searchName">\n' +
    '        <input type="search" class="placeholder input-search" placeholder="Search {{ current.searchName }}">\n' +
    '    </div><!-- search-field -->\n' +
    '</section><!-- breadcrumb-bar -->\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/filter-bar/filter-bar.tpl.html',
    '<section class="filters-bar">\n' +
    '    <div class="filters-dropdown-holder">\n' +
    '        <div class="dropdown dropdown-filters">\n' +
    '            <button class="btn btn-default dropdown-toggle" id="dropdown-filters-trigger" data-toggle="dropdown" aria-expanded="true">\n' +
    '                Filter\n' +
    '                <span class="icon"></span>\n' +
    '            </button>\n' +
    '\n' +
    '            <div class="dropdown-menu" role="menu" aria-labelledby="dropdown-filters-trigger">\n' +
    '                <form class="form" action="">\n' +
    '                    <ul class="list">\n' +
    '                        <li>\n' +
    '                            <h4 class="title">Timeframe</h4>\n' +
    '                            <label class="radio-inline custom-radio">\n' +
    '                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">\n' +
    '                                <span class="custom-icon-radio"></span>Today\n' +
    '                            </label>\n' +
    '                            <label class="radio-inline custom-radio">\n' +
    '                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">\n' +
    '                                <span class="custom-icon-radio"></span>This week\n' +
    '\n' +
    '                            </label>\n' +
    '                            <label class="radio-inline custom-radio">\n' +
    '                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">\n' +
    '                                <span class="custom-icon-radio"></span>This month\n' +
    '                            </label>\n' +
    '                            <label class="radio-inline custom-radio">\n' +
    '                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">\n' +
    '                                <span class="custom-icon-radio"></span>Custom...\n' +
    '                            </label>\n' +
    '                        </li>\n' +
    '\n' +
    '                        <li>\n' +
    '                            <h4 class="title">Priority</h4>\n' +
    '                            <label class="checkbox-inline custom-checkbox">\n' +
    '                                <input type="checkbox" name="inlineRadioOptions" id="inlineCheckbox1" value="option1">\n' +
    '                                <span class="custom-icon-checkbox"></span>Today\n' +
    '                            </label>\n' +
    '                            <label class="checkbox-inline custom-checkbox">\n' +
    '                                <input type="checkbox" name="inlineRadioOptions" id="inlineCheckbox2" value="option2">\n' +
    '                                <span class="custom-icon-checkbox"></span>This week\n' +
    '\n' +
    '                            </label>\n' +
    '                            <label class="checkbox-inline custom-checkbox">\n' +
    '                                <input type="checkbox" name="inlineRadioOptions" id="inlineCheckbox3" value="option3">\n' +
    '                                <span class="custom-icon-checkbox"></span>This month\n' +
    '                            </label>\n' +
    '                        </li>\n' +
    '\n' +
    '                        <li>\n' +
    '                            <label class="checkbox-inline custom-checkbox">\n' +
    '                                <input type="checkbox" name="inlineRadioOptions" id="inlineCheckbox3" value="option3">\n' +
    '                                <span class="custom-icon-checkbox"></span>Include archived cases?\n' +
    '                            </label>\n' +
    '\n' +
    '                            <button class="btn btn-custom btn-custom-green" type="submit">Apply Filters</button>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </form>\n' +
    '            </div><!-- dropdown-menu -->\n' +
    '        </div><!-- dropdown-filters -->\n' +
    '\n' +
    '        <div class="dropdown dropdown-filters">\n' +
    '            <button class="btn btn-default dropdown-toggle" id="dropdown-filters-trigger" data-toggle="dropdown" aria-expanded="true">\n' +
    '                Sort by...\n' +
    '                <span class="icon"></span>\n' +
    '            </button>\n' +
    '\n' +
    '            <div class="dropdown-menu" role="menu" aria-labelledby="dropdown-filters-trigger">\n' +
    '                <form action="">\n' +
    '                    <ul class="list">\n' +
    '                        <li>\n' +
    '                            1\n' +
    '                        </li>\n' +
    '\n' +
    '                        <li>\n' +
    '                            2\n' +
    '                        </li>\n' +
    '\n' +
    '                        <li>\n' +
    '                            3\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                </form>\n' +
    '            </div><!-- dropdown-menu -->\n' +
    '        </div><!-- dropdown-filters -->\n' +
    '    </div><!-- filters-dropdown-holder -->\n' +
    '</section><!-- filters-bar -->');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/footer/footer.tpl.html',
    '<footer>\n' +
    '  <div class="container">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-8 footer-part-left">\n' +
    '        <div class="row">\n' +
    '          <div class="col-sm-4 col-md-3 item">\n' +
    '            <h4 class="title">Navigation</h4>\n' +
    '            <ul>\n' +
    '              <li><a href="#">Home</a></li>\n' +
    '              <li><a href="#">Plans &amp; Pricing</a></li>\n' +
    '              <li><a href="#">Technologies</a></li>\n' +
    '              <li><a href="#">Series</a></li>\n' +
    '              <li><a href="#">Articles</a></li>\n' +
    '              <li><a href="#">Jobs</a></li>\n' +
    '              <li><a href="#">Enterprise Training</a></li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-sm-4 col-md-3 item">\n' +
    '            <h4 class="title">Technologies</h4>\n' +
    '            <ul>\n' +
    '              <li><a href="#">All Technologies</a></li>\n' +
    '              <li><a href="#">AngularJS</a></li>\n' +
    '              <li><a href="#">Core JavaScript</a></li>\n' +
    '              <li><a href="#">D3</a></li>\n' +
    '              <li><a href="#">ECMAscript 6</a></li>\n' +
    '              <li><a href="#">Grunt</a></li>\n' +
    '              <li><a href="#">Misc</a></li>\n' +
    '              <li><a href="#">Node.js</a></li>\n' +
    '              <li><a href="#">React</a></li>\n' +
    '              <li><a href="#">All Free Lessons</a></li>\n' +
    '              <li><a href="#">All Pro Lessons</a></li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '\n' +
    '          <div class="col-sm-4 col-md-5 item">\n' +
    '            <h4 class="title">Series</h4>\n' +
    '            <ul>\n' +
    '              <li><a href="#">All Series</a></li>\n' +
    '              <li><a href="#">Introduction to D3</a></li>\n' +
    '              <li><a href="#">AngularJS Data Modeling</a></li>\n' +
    '              <li><a href="#">React: Flux Architecture</a></li>\n' +
    '              <li><a href="#">Learn Protractor Testing for AngularJS</a></li>\n' +
    '              <li><a href="#">React Fundamentals</a></li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- row -->\n' +
    '      </div>\n' +
    '      <!-- footer-part-left -->\n' +
    '\n' +
    '      <div class="col-md-4 footer-part-right">\n' +
    '        <h4 class="title">Search Lessons</h4>\n' +
    '\n' +
    '        <div class="search-field-holder">\n' +
    '          <form action="">\n' +
    '            <input class="form-control input-search" type="text" placeholder="Search lessons for...">\n' +
    '            <button class="btn-submit icon-search" type="submit"></button>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '        <!-- search-field-holder -->\n' +
    '\n' +
    '        <div class="div terms-conditions-holder">\n' +
    '          &copy; edepo.io\n' +
    '          <br>\n' +
    '          <a href="#">Terms and Conditions &amp; Privacy Policy</a>\n' +
    '        </div>\n' +
    '        <!-- terms-conditions-holder -->\n' +
    '\n' +
    '        <div class="social-holder">\n' +
    '          <a href="#" class="icon-twitter"></a>\n' +
    '          <a href="#" class="icon-facebook"></a>\n' +
    '          <a href="#" class="icon-google-plus"></a>\n' +
    '        </div>\n' +
    '        <!-- social-holder -->\n' +
    '      </div>\n' +
    '      <!-- footer-part-right -->\n' +
    '    </div>\n' +
    '    <!-- row -->\n' +
    '  </div>\n' +
    '  <!-- container -->\n' +
    '</footer>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/header/header.tpl.html',
    '<header>\n' +
    '  <a id="leftBurger" class="slideRight offcanvas-toggle" href="#">\n' +
    '    <i class="fontello-menu-toggle"></i>\n' +
    '  </a>\n' +
    '\n' +
    '  <ul class="user-data-list">\n' +
    '    <li class="user-item">\n' +
    '      <div class="user-holder">\n' +
    '        <div class="dropdown">\n' +
    '          <a class="dropdown-toggle username" data-toggle="dropdown">\n' +
    '									<span class="userpic">\n' +
    '										<img src="assets/images/temp/userpic-01.jpg" alt="">\n' +
    '										<span class="alert-badge">{{ user.alertCount || "3" }}</span>\n' +
    '									</span>\n' +
    '            {{ user.name || "John Smith" }}\n' +
    '            <span class="icon-arrow"></span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" role="menu">\n' +
    '            <li role="presentation"><a role="menuitem" tabindex="-1" ui-sref="app.activity-stream">Activity stream <span class="alert-badge">3</span></a></li>\n' +
    '            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Sharing history</a></li>\n' +
    '            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Administration</a></li>\n' +
    '            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Manage ratings</a></li>\n' +
    '            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Log out</a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div><!-- user-holder -->\n' +
    '    </li><!-- user-item -->\n' +
    '\n' +
    '    <li class="inbox-item">\n' +
    '      <div class="inbox-holder">\n' +
    '        <a href="#" class="inbox-link">\n' +
    '								<span class="icon-holder">\n' +
    '									<i class="fontello-email icon"></i>\n' +
    '									<span class="alert-badge">3</span>\n' +
    '								</span><!-- icon-holder -->\n' +
    '          Inbox\n' +
    '        </a>\n' +
    '      </div><!-- inbox-holder -->\n' +
    '    </li><!-- inbox-item -->\n' +
    '  </ul><!-- user-data-list -->\n' +
    '\n' +
    '  <ul class="user-actions-list">\n' +
    '    <li>\n' +
    '      <a href="#" class="user-action-link add">\n' +
    '        <i class="fontello-plus icon"></i>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '\n' +
    '    <li>\n' +
    '      <a href="#" class="user-action-link add">\n' +
    '        <i class="fontello-search icon"></i>\n' +
    '      </a>\n' +
    '    </li>\n' +
    '  </ul><!-- user-actions-list -->\n' +
    '</header>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/sidebar/sidebar.tpl.html',
    '<aside id="sidebarLeft" class="offcanvas-left animatedSlide show">\n' +
    '    <div class="scrollable-area">\n' +
    '        <div class="search-field">\n' +
    '            <input type="search" class="placeholder input-search" placeholder="Search">\n' +
    '        </div><!-- search-field -->\n' +
    '        <ul>\n' +
    '            <li data-toggle="collapse" data-target="#case-list" class="expanded">\n' +
    '                <a><i class="fa fa-gift fa-lg"></i> Case List <span class="caret"></span></a>\n' +
    '            </li>\n' +
    '            <ul class="sub-menu collapse out" id="case-list">\n' +
    '                <edepo-case-list-sidebar></edepo-case-list-sidebar>\n' +
    '            </ul>\n' +
    '\n' +
    '\n' +
    '            <li data-toggle="collapse" data-target="#event-list" class="collapsed">\n' +
    '                <a><i class="fa fa-globe fa-lg"></i> Events <span class="caret"></span></a>\n' +
    '            </li>\n' +
    '            <ul class="sub-menu collapse out" id="event-list">\n' +
    '                <edepo-event-list-sidebar></edepo-event-list-sidebar>\n' +
    '            </ul>\n' +
    '\n' +
    '\n' +
    '            <li data-toggle="collapse" data-target="#job-list" class="collapsed">\n' +
    '                <a><i class="fa fa-car fa-lg"></i> Jobs <span class="caret"></span></a>\n' +
    '            </li>\n' +
    '            <ul class="sub-menu collapse out" id="job-list">\n' +
    '                <edepo-job-list-sidebar></edepo-job-list-sidebar>\n' +
    '            </ul>\n' +
    '\n' +
    '            <li data-toggle="collapse" data-target="#invoicing-list" class="collapsed">\n' +
    '                <a><i class="fa fa-car fa-lg"></i> Invoicing <span class="caret"></span></a>\n' +
    '            </li>\n' +
    '            <ul class="sub-menu collapse out" id="invoicing-list">\n' +
    '                <li>Summary</li>\n' +
    '                <li>Settings</li>\n' +
    '            </ul>\n' +
    '\n' +
    '        </ul>\n' +
    '    </div><!-- scrollable-area -->\n' +
    '</aside>');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/sidebar/case-list/case-list.tpl.html',
    '\n' +
    '<li ng-repeat="case in cases" ng-class="{\'active\':isCurrentCase(case)}">\n' +
    '    <a ui-sref="app.cases.detail({caseId: case.id})" ng-click=\'showSubNav = ! showSubNav; setCurrentCase(case)\' >{{case.name}}</a>\n' +
    '    <ul class="nav nav-sidebar-sub" id="depo-nav-{{case.id}}" ng-show="showSubNav">\n' +
    '        <li ng-repeat="depo in case.depositions" ng-class="{\'sub-active\':isCurrentDeposition(depo)}">\n' +
    '            <a ui-sref="app.cases.transcripts({caseId: case.id, transcriptId: depo.id})" ng-click="setCurrentDeposition(depo)">{{depo.deponent}}</a>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</li>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/sidebar/event-list/event-list.tpl.html',
    '\n' +
    '<li ng-repeat="event in events">\n' +
    '    {{event.name}}\n' +
    '</li>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('templates-app');
} catch (e) {
  module = angular.module('templates-app', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('common/components/sidebar/job-list/job-list.tpl.html',
    '\n' +
    '<li ng-repeat="event in events">\n' +
    '    {{event.name}}\n' +
    '</li>\n' +
    '');
}]);
})();
