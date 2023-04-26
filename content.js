chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "login") {
    document.querySelector("#login_id").value = request.username;
    document.querySelector("#password").value = request.password;
    document.querySelector(".signin_submit").click();
  }
});
