function handleSubmit(event) {
  event.preventDefault();

  let userName = document.getElementById("inputUsernameReg").value;
  let email = document.getElementById("inputEmailReg").value;
  let password = document.getElementById("inputPasswordReg").value;
  let confirmPassword = document.getElementById("confirmPasswordReg").value

  localStorage.setItem("userName", userName)
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  localStorage.setItem("confirmPassword", confirmPassword)
}

function handleRegister() {
  let userName = document.getElementById("inputUsernameReg").value;
  let email = document.getElementById("inputEmailReg").value;
  let password = document.getElementById("inputPasswordReg").value;
  let confirmPassword = document.getElementById("confirmPasswordReg").value

  if (!userName) {
    alert("nama tidak boleh kosong")
  } else if (!email) {
    alert("email tidak boleh kosong")
  } else if (password !== confirmPassword) {
    alert("password tidak sesuai")
  } else {
    window.open("mainPage.html")
  }
}