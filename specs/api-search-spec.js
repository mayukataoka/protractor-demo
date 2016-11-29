'use strict';
var SearchBoxPage = require('../pages/api-searchbox-page.js');
var Menu = require('../pages/menu-page.js');
var testData = require('../test-data.json');

describe('API searchbox , ', function () {

    var searchBox = new SearchBoxPage();
    var menu = new Menu();

    //Open the API page
    beforeEach(function () {
        browser.get(browser.baseUrl);
        menu.dropdown('Reference').option('Protractor API').click();
        expect(browser.getCurrentUrl())
            .toBe(browser.baseUrl + '/#/api');
    });

    //data driven test.
    //Iterate the external data file.
    testData.forEach(function (testdata) {
        it('should be able to receive a search term from a user and display a correct result. @smoke', function () {
            var searchTerm = testdata.searchKey;
            searchBox.searchApi(searchTerm);
            expect(element(by.linkText(searchTerm)).isDisplayed()).toBe(true);
        });
    });


});
