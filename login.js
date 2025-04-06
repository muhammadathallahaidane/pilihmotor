//Login; verification//
function verification() {
  let userName = document.getElementById("inputUsername").value;
  let password = document.getElementById("inputPassword").value;
  let setUname = "Example"
  let setPass = "admin123"
  if (userName === setUname) {
    if(password === setPass) {
      window.open("main-page.html")
      alert("Login Success")
    } 
    else{alert("Incorrect Password")}}
  else{alert("Incorrect Username")}
};