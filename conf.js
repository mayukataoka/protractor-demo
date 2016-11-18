var fs = require('fs');
var path = require('path');
var reporters = require('jasmine-reporters');
var AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/todo-spec.js'],
    directConnect: true,
    framework: 'jasmine2',

    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            binary: "/Applications/Google\ Chrome\ 2.app/Contents/MacOS/Google\ Chrome",
            args: [],
            extensions: []
        }
    },

    baseUrl: 'http://www.protractortest.org',


    specs: [
        //'specs/todo-spec.js'
        'specs/smoke/api-search-spec.js'
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

    }
};