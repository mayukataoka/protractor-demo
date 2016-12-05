var fs = require('fs');
var path = require('path');
var reporters = require('jasmine-reporters');
var AllureReporter = require('jasmine-allure-reporter');

exports.config = {

    framework: 'jasmine2',

    capabilities: {
        "browserName": "chrome"
    },

    multiCapabilities: [{
        browserName: 'firefox',
        version: '32',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
    }, {
        browserName: 'chrome',
        version: '41',
        platform: 'Windows 7',
        name: "chrome-tests",
        shardTestFiles: true,
        maxInstances: 25
    }],

    baseUrl: 'http://www.protractortest.org',

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    specs: [
        'specs/*spec.js'
    ],

    onPrepare: function() {

    !fs.existsSync(__dirname + '/allure-results') &&  fs.mkdirSync(__dirname + '/allure-results');
    var reporterPath = path.resolve(path.join(__dirname, '/allure-results'));

    jasmine
        .getEnv()
        .addReporter(new reporters.JUnitXmlReporter({
            'savePath': reporterPath,
            'consolidate': true,
            'consolidateAll': true
        }));

    var reporter = new AllureReporter({
        allureReport : {
            resultsDir : '/allure-results'
        }
    });
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })
    });

    },

    onComplete: function() {

        var printSessionId = function(jobName){
            browser.getSession().then(function(session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Mayu Kataoka - Protractor sample tests I wrote.");
    }
};