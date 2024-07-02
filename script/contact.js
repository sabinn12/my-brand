// /* Home or main content navbar */ 
// let menuBtn = document.getElementById("menu");
// let links = document.getElementById("links");

// menuBtn.addEventListener("click", function(e){
//     links.classList.toggle('responsive');
//     menuBtn.classList.toggle('fa-x')
// });


// var nameError = document.getElementById('name-error');
// var emailError = document.getElementById('email-error');
// var messageError = document.getElementById('message-error');
// var submitError = document.getElementById('submit-error');

// function validateName() {
//     var name = document.getElementById('contact-name').value;
//     if (name.length === 0) {
//         nameError.innerHTML = 'Name is required';
//         return false;
//     }
//     if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//         nameError.innerHTML = 'Write full Name';
//         return false;
//     }
//     nameError.innerHTML = '<i class= "fas fa-check-circle"></i>';
//     return true;
// }

// function validateEmail() {
//     var email = document.getElementById('contact-email').value;
//     if (email.length === 0) {
//         emailError.innerHTML = 'Email is required';
//         return false;
//     }
//     if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//         emailError.innerHTML = 'Email is invalid';
//         return false;
//     }
//     emailError.innerHTML = '<i class= "fas fa-check-circle"></i>';
//     return true;
// }

// function validateMessage() {
//     var message = document.getElementById('contact-message').value;

//     var required = 10;
//     var left = required - message.length;

//     if (left > 0) {
//         messageError.innerHTML = left + ' message required';
//         return false;
//     }
//     messageError.innerHTML = '<i class= "fas fa-check-circle"></i>';
//     return true;
// }

// function submitForm() {
//     if (!validateEmail() || !validateMessage() || !validateName()) {
//         submitError.style.display = 'flex';
//         submitError.innerHTML = 'Please fix errors to submit';
//         return false;
//     }

//     handleFormSubmission();
// }

// function handleFormSubmission() {
//     // Get form data
//     var name = document.getElementById('contact-name').value;
//     var email = document.getElementById('contact-email').value;
//     var message = document.getElementById('contact-message').value;

//     //  message object
//     var newMessage = {
//         name: name,
//         email: email,
//         message: message,
//         date: new Date().toLocaleDateString(),
//     };

//     // Retrieve existing messages from local storage or initialize an empty array
//     var messages = JSON.parse(localStorage.getItem('messages')) || [];

//     // Add the new message to the array
//     messages.push(newMessage);

//     // Save the updated messages array back to local storage
//     localStorage.setItem('messages', JSON.stringify(messages));

//     alert('Message submitted successfully!');

//     // Clear the form fields
//     document.getElementById('contact-name').value = '';
//     document.getElementById('contact-email').value = '';
//     document.getElementById('contact-message').value = '';

//     // Clear any error messages
//     nameError.innerHTML = '';
//     emailError.innerHTML = '';
//     messageError.innerHTML = '';
//     submitError.innerHTML = '';
// }
// function submitForm() {
//     // Get form data
//     const name = document.getElementById('contact-name').value;
//     const email = document.getElementById('contact-email').value;
//     const message = document.getElementById('contact-message').value;

//     // Create an object with the form data
//     const formData = {
//         name: name,
//         email: email,
//         message: message
//     };

//     // Send a POST request to your backend endpoint
//     fetch('https://mybrand-back-end.onrender.com/api/v1/brand/querries', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to submit query');
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle success response from the backend
//         alert(data.message); // Show a success message
//         // You can also redirect the user to a thank you page or do other actions
//     })
//     .catch(error => {
//         console.error('Error submitting query:', error);
//         // Handle error
//         alert('Failed to submit query. Please try again.'); // Show an error message
//     });
// }

// Toggle responsive class for mobile navigation
// Define variables for error messages
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

let menuBtn = document.getElementById("menu");
let links = document.getElementById("links");

menuBtn.addEventListener("click", function(e){
    links.classList.toggle('responsive');
    menuBtn.classList.toggle('fa-x')
});

// Function to validate the name field
function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    nameError.innerHTML = '<i class= "fas fa-check-circle"></i>';
    return true;
}

// Function to validate the email field
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class= "fas fa-check-circle"></i>';
    return true;
}

// Function to validate the message field
function validateMessage() {
    var message = document.getElementById('contact-message').value;

    var required = 10;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' message required';
        return false;
    }
    messageError.innerHTML = '<i class= "fas fa-check-circle"></i>';
    return true;
}

// Function to handle form submission
function submitForm() {
    // Validate form fields
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'flex';
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }

    // Get form data
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // Create an object with the form data
    const formData = {
        Name: name,
        Email: email,
        Message: message
    };

    // Send a POST request to your backend endpoint
    fetch('https://mybrand-back-end.onrender.com/api/v1/brand/querries', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit query');
        }
        return response.json();
    })
    .then(data => {
         // Display a pop-up message
         const popupMessage = document.createElement('div');
         popupMessage.classList.add('popup-message');
         popupMessage.innerHTML = '<p>Your query has been submitted successfully!</p>';
         document.body.appendChild(popupMessage);
 
         // Remove the pop-up message after 3 seconds
         setTimeout(() => {
             popupMessage.remove();
         }, 3000);
 
    })
    .catch(error => {
        console.error('Error submitting query:', error);
        // Handle error
        alert('Failed to submit query. Please try again.'); // Show an error message
    });

    // Clear the form fields and error messages
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
    submitError.innerHTML = '';
}
