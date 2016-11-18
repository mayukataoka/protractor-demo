'use strict';
var SearchBoxPage = require('../../pages/api-searchbox-page.js');
var Menu = require('../../pages/menu-page.js');


describe('API searchbox , ', function() {

    var searchBox = new SearchBoxPage();
    var menu = new Menu();

    beforeEach(function () {
        browser.get(browser.baseUrl);
        menu.dropdown('Reference').option('Protractor API').click();
        expect(browser.getCurrentUrl())
            .toBe('http://www.protractortest.org/#/api');
    });

    it('should be able to take a search term from a user', function () {
        var searchTerm = 'filter';
        searchBox.searchApi(searchTerm);
        expect(element(by.linkText(searchTerm)).isDisplayed()).toBe(true);
    });
});
