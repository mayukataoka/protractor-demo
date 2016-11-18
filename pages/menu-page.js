/**
 * Created by mumpiko on 11/16/16.
 */
/**
 * Page object for Protractor website menu.
 * @constructor
 */
var MenuPage = function() {
    this.dropdown = function(dropdownName) {
        /**
         * Dropdown api. Used to click on an element under a dropdown.
         * @param {string} dropdownName
         * @return {{option: Function}}
         */
        var openDropdown = function() {
            element(by.css('.navbar-nav'))
                .element(by.linkText(dropdownName))
                .click();
        };

        return {
            /**
             * Get an option element under a dropdown.
             * @param {string} optionName
             * @return {ElementFinder}
             */
            option: function(optionName) {
                openDropdown();
                return element(by.css('.dropdown.open'))
                    .element(by.linkText(optionName));
            }
        }
    };
};

module.exports = MenuPage;