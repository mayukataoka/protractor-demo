

var SearchBoxPage = function () {

    var searchBox = element(by.id('searchInput'));
    var searchBoxSubmitButton = element(by.id('search-btn'));

    this.searchApi = function(name) {
        searchBox.sendKeys(name);
    };
};

module.exports = SearchBoxPage;


