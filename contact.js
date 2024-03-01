var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

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

function submitForm() {
    if (!validateEmail() || !validateMessage() || !validateName()) {
        submitError.style.display = 'flex';
        submitError.innerHTML = 'Please fix errors to submit';
        return false;
    }

    handleFormSubmission();
}

function handleFormSubmission() {
    // Get form data
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    //  message object
    var newMessage = {
        name: name,
        email: email,
        message: message,
        date: new Date().toLocaleDateString(),
    };

    // Retrieve existing messages from local storage or initialize an empty array
    var messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Add the new message to the array
    messages.push(newMessage);

    // Save the updated messages array back to local storage
    localStorage.setItem('messages', JSON.stringify(messages));

    alert('Message submitted successfully!');

    // Clear the form fields
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';

    // Clear any error messages
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
    submitError.innerHTML = '';
}
