(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app4.default.$inject = ['$rootScope', '$interval'];

var appComponent = {
    template: _app2.default,
    controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl() {
    _classCallCheck(this, appCtrl);

    var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "<!--<h1>hello world mark</h1>-->\n<navbar></navbar>\n<sidebar></sidebar>";

},{}],4:[function(require,module,exports){
'use strict';

var _app = require('./app.component');

var _app2 = _interopRequireDefault(_app);

var _navbar = require('./components/navbar/navbar.component');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import sidebarComponent from './components/sidebar/sidebar.component';

// 'use strict'

angular.module('app', []).component('app', _app2.default).component('navbar', _navbar2.default
// .component('sidebar', sidebarComponent)
);

},{"./app.component":1,"./components/navbar/navbar.component":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navbar = require('./navbar.html');

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar3 = require('./navbar.controller');

var _navbar4 = _interopRequireDefault(_navbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbarComponent = {
    bindings: {},
    template: _navbar2.default,
    controller: ['$rootScope', '$interval', _navbar4.default],
    controllerAs: '$ctrl'
};

exports.default = navbarComponent;

},{"./navbar.controller":6,"./navbar.html":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var navbarController = function navbarController($rootScope, $interval) {
    _classCallCheck(this, navbarController);

    var ctrl = this;
    ctrl.$rootScope = $rootScope;
    ctrl.title = "MarkMail";
};

exports.default = navbarController;

},{}],7:[function(require,module,exports){
module.exports = "<nav class=\"navbar navbar-default\" id=\"navbar1\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <p id=\"logo\" class=\"navbar-text navbar-left\"><a href=\"#\" class=\"navbar-link\">MarkMail</a></p>\n            <!--<a class=\"navbar-brand\" href=\"#\">\n            <img id=\"navlogo\" alt=\"Brand\" src=\"http://www.freeiconspng.com/uploads/email-icon--100-flat-vol-2-iconset--graphicloads-18.png\">\n        </a>-->\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon glyphicon-search\" aria-hidden=\"true\"></span></button>\n            </form>\n        </div>\n        <div id=\"profile\" class=\"container\">\n            Profile\n        </div>\n    </div>\n</nav>\n\n<nav class=\"navbar navbar-default\" id=\"navbar2\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <div class=\"col-xs-2\">\n            <div class=\"checkbox\">\n                <label><input type=\"checkbox\" value=\"\"></label>\n            </div>\n            </div>\n            <div class=\"col-xs-10\">\n                <button ng-click=\"$ctrl.hello()\">hello button</button>\n            </div>\n        </div>\n\n    </div>\n</nav>\n<!--<div class=\"container\">\n    <div id=\"leftcol\" class=\"col-xs-2\">\n        <div id=\"compose\" #class=\"row\">\n            test\n        </div>\n        test\n    </div>\n    <div id=\"rightcol\" class=\"col-xs-10\">\n        test\n    </div>\n</div>-->\n\n<!--<h1>{{$ctrl.title}}</h1>-->";

},{}]},{},[4]);
