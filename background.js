chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "login") {
    chrome.tabs.create({ url: "https://accounts.zoho.com/login" }, function(tab) {
      chrome.tabs.executeScript(tab.id, { file: "content.js" }, function() {
        chrome.tabs.sendMessage(tab.id, {
          action: "login",
          username: request.username,
          password: request.password
        });
      });
    });
  }
});
