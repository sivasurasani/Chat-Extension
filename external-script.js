// external-script.js

// Function to handle sending messages
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();

    if (message !== "") {
        try {
            // Make an API request
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',  // or 'GET' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify({ message: message }),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
                }
            })
            .then(responseData => {
                // Handle the API response here (update UI, etc.)
                console.log(responseData);
            })
            .catch(error => {
                // Handle errors here
                console.error('Error:', error);
            });

            // Append the new message to the chatMessages container
            var chatMessages = document.getElementById("chatMessages");
            chatMessages.innerHTML += `<div>${message}</div>`;

            // Clear the input field
            messageInput.value = "";
        } catch (error) {
            // Handle network or other errors here
            console.error('Error:', error);
        }
    }
}