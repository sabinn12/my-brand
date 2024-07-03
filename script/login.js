         /* Home or main content navbar */
        let menuBtn = document.getElementById("menu");
        let links = document.getElementById("links");

        menuBtn.addEventListener("click", function(e){
            links.classList.toggle('responsive');
            menuBtn.classList.toggle('fa-x')
        });

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var email = document.getElementById('email').value; // Fixed variable name
            var password = document.getElementById('password').value;
            var usernameError = document.getElementById('usernameError');
            var passwordError = document.getElementById('passwordError');

            // Reset error messages
            usernameError.innerHTML = "";
            passwordError.innerHTML = "";

           
            // Retrieve token from localStorage
            const token = localStorage.getItem('token');

            // Make POST request to login endpoint with token in Authorization header
            fetch('https://mybrand-back-end.onrender.com/api/v1/brand/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    email: email, 
                    password: password
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                // Store token in localStorage
                localStorage.setItem('token', data.token);

                // Redirect to dashboard or other page
                window.location.href = '/dashboard/Dashboard.html';
            })
            .catch(error => {
                console.error('Login error:', error);
                alert('Login failed. Please check your credentials.');
            });
        });
    
// year footer

document.getElementById('year').textContent = new Date().getFullYear();