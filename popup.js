document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  chrome.runtime.sendMessage({
    action: "login",
    username: username,
    password: password
  });
});
