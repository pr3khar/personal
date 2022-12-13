function checkPswd() {
  var confirmPassword = "prakharopenhouse";
  //since you are here, I guess you have enough time at your disposal. Please develop a better system for me. Have a good day :)
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
    window.location =
      "https://pr3khar.notion.site/Internship-at-Upstox-07d6895a70854306a744c2b1abf5435d";
  } else {
    alert("Incorrect :(");
  }
}
