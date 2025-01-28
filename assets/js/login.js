const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", function (event) {
    event.preventDefault();

    if (username.value === "admin123" && password.value === "12345678") {
        window.location.href = "logged.html";
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
});
