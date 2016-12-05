'use strict';
var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('baZ3oBBbi51mMo9ecF0dphDxXbSYd5fcHSX8iJkLivY110');

var SearchBoxPage = require('../pages/api-searchbox-page.js');
var Menu = require('../pages/menu-page.js');
var BrowserSupportPage = require('../pages/browser-support-page.js');


describe('In the Browser support screen, ', function () {

    var searchBox = new SearchBoxPage();
    var menu = new Menu();
    var browserSupport = new BrowserSupportPage();

    //Open the API page
    beforeEach(function () {
        eyes.open(browser, 'Protractor Web Site', 'Browser Support Page Test', {width: 1175, height: 643});
        browser.get(browser.baseUrl);
        // Visual validation point #1
        eyes.checkWindow('Test start');
        menu.dropdown('Reference').option('Browser Support').click();
        // Visual validation point #2
        eyes.checkWindow('After opening a menu item Reference->Browser Support');
        expect(browser.getCurrentUrl())
            .toBe(browser.baseUrl + '/#/browser-support');
    });

    afterEach(function () {
        // End visual testing. Validate visual correctness.
        eyes.close();
    });

    it('the Known issue links should not throw an error after clickin on each link.  @regression ', function () {
        browserSupport.links.count().then(function (totalLinkCount) {
            var i = 0;
            //Click on all links
            while (i < totalLinkCount) {
                browserSupport.links.get(i).click();
                // Visual validation point
                eyes.checkWindow('After opening a known issue link in the Known issue link table');
                expect(browser.driver.findElement(by.css('.issues-listing')).isDisplayed()).toBe(true);
                browser.navigate().back();
                i++;
            };
        });
    });
});
