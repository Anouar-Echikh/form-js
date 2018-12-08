//Add event  to submit btn to validate Email
// var f = document.getElementById("btn-submit");
/*
document.getElementById("btn-submit").addEventListener("click", function() {
  if (document.getElementById("email").value.indexOf("@") == -1) alert("Vérifier votre email!");
});*/

// Validate an email with onClick

function validateEmail() {
  //let email=document.getElementById("email");
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (regex.test(document.getElementById("email").value) == true)
    var x = alert("ok");
  else {
    var x = alert("Verify your email!");
  }
}
// Validate a pwd
function validatePWD() {
  let pwd = document.getElementById("pwd");
  var regex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );
  if (regex.test(document.getElementById("pwd").value) == true) {
    alert("Your pwd OK");
  } else {
    alert("Vérify your password!");
  }
}
