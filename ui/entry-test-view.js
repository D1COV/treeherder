'use strict';

// Webpack entry point for test-view.html
// Scripts and styles included here are automatically included on the page at build time

require("./js/config");

// Styles
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./css/treeherder-global.css');
require('./css/treeherder-notifications.css');

// Vendor JS
require('angular');
require('angular-route');
require('angular-resource');
require('angular-cookies');
require('angular-sanitize');
require('angular-local-storage');
require('bootstrap/dist/js/bootstrap');
require('angular1-ui-bootstrap4');
require('./vendor/resizer.js');

// TestView JS
require('./test-view/ui/Groups.js');
