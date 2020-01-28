# protractor-jasmine

Web UI Automation based on Protractor, Selenium and Jasmine framework

## Getting Started
Make sure you have installed:
- [node.js](https://nodejs.org/en/download/)
- Google Chrome browser
- Protractor. Follow setup steps described [here](http://www.protractortest.org/#/tutorial#setup)

### Clone the github repository:
``` 
git clone https://github.com/TradifyHQ/web-automation-protractor.git
```

### Install Project Dependencies
```
//Navigate into the folder with the solution
cd cd /web-automation-protractor
npm install
```
### Download the necessary libraries and Chrome Driver
```
webdriver-manager start
```

### Start Webdriver Manager
```
webdriver-manager start
```

### Run tests:
By default tests will be run on the QA environment
```
protractor config.js
```

Tests can be run across  diffrent environments and operating systems:
```
Commands to run npm scripts:
npm run start-qa-all-test-win
npm run start-qa-all-test-linux
npm run start-prod-all-test-win
npm run start-prod-all-test-linux
npm run start-staging-all-test-win
npm run start-staging-all-test-linux
```

