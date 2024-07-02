        // Function to fetch messages from the API endpoint
        async function fetchMessages() {
            try {
                const response = await fetch('https://mybrand-back-end.onrender.com/api/v1/brand/querries', {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const data = await response.json();
                return data.querries;
            } catch (error) {
                console.error('Error fetching messages:', error);
                return [];
            }
        }

        // Function to delete a message
        async function deleteMessage(queryId) {
            try {
                const response = await fetch(`https://mybrand-back-end.onrender.com/api/v1/brand/querries/${queryId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to delete message');
                }
                // Refresh messages after successful deletion
                refreshMessages();
            } catch (error) {
                console.error('Error deleting message:', error);
            }
        }

        // Function to reply to a message
        function replyToMessage(email) {
            // Create a mailto link with the subject and body pre-filled
            var mailtoLink = 'mailto:' + email + '?subject=Reply to Your Message&body=Dear,%0D%0A%0D%0A';
            // Open the default email client
            window.location.href = mailtoLink;
        }

        // Function to refresh messages on the page
        async function refreshMessages() {
            var messagesContainer = document.getElementById('messages-container');
            messagesContainer.innerHTML = ''; // Clear the current messages on the page

            // Fetch messages from the API endpoint
            const messages = await fetchMessages();

            // Check if messages is defined and not empty before proceeding
            if (messages && messages.length > 0) {
                // Populate messages dynamically
                messages.forEach(function (message) {
                    var messageElement = document.createElement('div');
                    messageElement.className = 'message';

                    var headerElement = document.createElement('div');
                    headerElement.className = 'message-header';
                    headerElement.innerHTML = '<span class="name">' + message.Name + '</span>' + // Use 'Name' instead of 'name'
                                              '<span class="email">' + message.Email + '</span>' ; // Use 'Email' instead of 'email'
                                               // Assuming there's a 'Date' property

                    var bodyElement = document.createElement('div');
                    bodyElement.className = 'message-body';
                    bodyElement.innerHTML = '<p>' + message.Message + '</p>'; // Use 'Message' instead of 'message'

                    var footerElement = document.createElement('div');
                    footerElement.className = 'message-footer';

                    // Add a reply button with an onclick event to trigger the replyToMessage function
                    footerElement.innerHTML = '<button class="reply" onclick="replyToMessage(\'' + message.Email + '\')">Reply</button>' + // Use 'Email' instead of 'email'
                                              '<button class="delete" onclick="deleteMessage(\'' + message._id + '\')">Delete</button>';

                    messageElement.appendChild(headerElement);
                    messageElement.appendChild(bodyElement);
                    messageElement.appendChild(footerElement);

                    messagesContainer.appendChild(messageElement);
                });
            } else {
                // Handle case when no messages are available
                console.log('No messages available.');
            }
        }

        // Refresh messages on page load
        window.onload = function () {
            // Call refreshMessages on page load
            refreshMessages();
        };
        
    
