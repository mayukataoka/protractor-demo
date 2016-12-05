# protractor-demo

This is a sample protractor test. It demonstrates page objects and data driven tests. This test tests angular and non
pages. The sample test generates an allure report. The test uses gulp-angular-protractor and it automatically start and
stop the web server when the tests are executed.

## How to run a smoke test

    npm install

    node_modules/gulp/bin/gulp.js smoke

## How to run a regression test

    npm install

    node_modules/gulp/bin/gulp.js regression

## How to configure the tests to run on Saucelab

- Add the following in your bash_profile

    export SAUCE_USERNAME=<Your Sauce User Name>

    export SAUCE_ACCESS_KEY=<Your Sauce Access key>

- Add the following code to the protractor config file (https://github.com/mayukataoka/protractor-demo/blob/master/conf.js)

    sauceUser: process.env.SAUCE_USERNAME,

    sauceKey: process.env.SAUCE_ACCESS_KEY,

- Add multicababilities to the protractor config file (https://github.com/mayukataoka/protractor-demo/blob/master/conf.js)

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

- Run the tests in the same way mentioned above and look at the Saucelab dashboard on the web.

Here is the multi browser test result shown on Saucelabs dashboard.

<img src="assets/saucelab-test-result.png" width="800">

