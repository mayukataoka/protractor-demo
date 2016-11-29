
var MenuPage = function() {

    this.dropdown = function(dropdownName) {

        var openDropdown = function() {
            element(by.css('.navbar-nav'))
                .element(by.linkText(dropdownName))
                .click();
        };

        return {
            option: function(optionName) {
                openDropdown();
                return element(by.css('.dropdown.open'))
                    .element(by.linkText(optionName));
            }
        }
    };
};

module.exports = MenuPage;