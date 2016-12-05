'use strict';
var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('baZ3oBBbi51mMo9ecF0dphDxXbSYd5fcHSX8iJkLivY110');

var SearchBoxPage = require('../pages/api-searchbox-page.js');
var Menu = require('../pages/menu-page.js');
var testData = require('../test-data.json');

describe('API searchbox , ', function () {

    var searchBox = new SearchBoxPage();
    var menu = new Menu();

    beforeEach(function () {
        eyes.open(browser, 'Protractor Web Site', 'API Search Page Test', {width: 1175, height: 643});
        browser.get(browser.baseUrl);
        // Visual validation point #1
        eyes.checkWindow('Test start');
        menu.dropdown('Reference').option('Protractor API').click();
        // Visual validation point #2
        eyes.checkWindow('After opening a menu item Reference->Protractor API');
        expect(browser.getCurrentUrl())
            .toBe(browser.baseUrl + '/#/api');
    });

    afterEach(function () {
        // End visual testing. Validate visual correctness.
        eyes.close();
    });


    testData.forEach(function (testdata) {
        it('should be able to receive a search term from a user and display a correct result. @smoke', function () {
            var searchTerm = testdata.searchKey;
            searchBox.searchApi(searchTerm);
            // Visual validation point
            eyes.checkWindow('After entering a search term');
            expect(element(by.linkText(searchTerm)).isDisplayed()).toBe(true);
        });
    });


});
