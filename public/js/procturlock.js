https: function checkPswd() {
  var confirmPassword = "prakharproctur";
  //since you are here, I guess you have enough time at your disposal. Please develop a better system for me. Have a good day :)
  var password = document.getElementById("pswd").value;
  if (password == confirmPassword) {
    window.location =
      "//pr3khar.notion.site/Proctur-57bdfb9e99d3461bb5d1fc9522927f59";
  } else {
    alert("Incorrect :(");
  }
}
