const config = require('./env').config
const env = require('./env').environment
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/.tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: '.tmp/screenshots'
    }).getJasmine2Reporter());
 },

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 100000,
    allScriptsTimeout: 300000,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: config.baseUrl,
    
    specs: [
      './tests/Login.js',
      './tests/Login2.js'
  ],

    onComplete: () => {
    }
  }