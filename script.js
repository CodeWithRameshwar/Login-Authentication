function register() {
  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (!fullName || !username || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration successful");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
