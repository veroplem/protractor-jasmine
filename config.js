const config = require('./env').config
const env = require('./env').environment
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 100000,
    allScriptsTimeout: 300000,
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: config.baseUrl,

    capabilities:{
      shardTestFiles: true,
      maxInstances: 1,
      browserName: 'chrome',
      chromeOptions: {
        args: ['--window-size=1280,1024', '--headless', '--disable-gpu']
      }
    },

    suites:{
      smoke: './tests/Smoke/*.js',
      regression: './tests/Regression/*.js'
    },
    
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/.tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: '.tmp/screenshots'
      }).getJasmine2Reporter());
   },

    onComplete: () => {
    }
  }