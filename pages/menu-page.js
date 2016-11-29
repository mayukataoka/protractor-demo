
var MenuPage = function() {

    var navigationBar = element(by.css('.navbar-nav'));
    var expandedDropdown = element(by.css('.dropdown.open'));

    this.dropdown = function(dropdownName) {

        var openDropdown = function() {
            navigationBar
                .element(by.linkText(dropdownName))
                .click();
        };

        return {
            option: function(optionName) {
                openDropdown();
                return expandedDropdown
                    .element(by.linkText(optionName));
            }
        }
    };
};

module.exports = MenuPage;