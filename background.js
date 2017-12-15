chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({
        'url': chrome.extension.getURL('dist/index.html#/homePage')
    }, (tab) => {
        // Tab opened.
    });
});