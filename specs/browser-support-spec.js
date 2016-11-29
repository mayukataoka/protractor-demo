'use strict';
var SearchBoxPage = require('../pages/api-searchbox-page.js');
var Menu = require('../pages/menu-page.js');
var BrowserSupportPage = require('../pages/browser-support-page.js');


describe('The Known issue links in the Browser Support page ', function () {

    var searchBox = new SearchBoxPage();
    var menu = new Menu();
    var browserSupport = new BrowserSupportPage();

    //Open the API page
    beforeEach(function () {
        browser.get(browser.baseUrl);
        menu.dropdown('Reference').option('Browser Support').click();
        expect(browser.getCurrentUrl())
            .toBe(browser.baseUrl + '/#/browser-support');
    });

    it('should not throw an error. @regression ', function () {
        browserSupport.links.count().then(function (totalLinkCount) {
            var i = 0;
            //Click on all links
            while (i < totalLinkCount) {
                browserSupport.links.get(i).click();
                expect(browser.driver.findElement(by.css('.issues-listing')).isDisplayed()).toBe(true);
                browser.navigate().back();
                i++;
            };
        });
    });


});
