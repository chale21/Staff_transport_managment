document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

   
    if (user === "admin" && pass === "12345") {
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to another page
    } else {
        errorMsg.style.display = "block"; // Show the error message
    }
});