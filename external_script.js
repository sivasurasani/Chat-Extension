document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const chatMessages = document.getElementById("chatMessages");

    sendMessageBtn.addEventListener("click", async () => {
        const userMessage = messageInput.value.trim();

        if (userMessage !== "") {
            // displayMessage(userMessage, "user");
            displayMessage(userMessage, "user");
            try {
                const response = await fetch('http://127.0.0.1:8005/get-response', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        input: userMessage,
                    }),
                });
                 
                if (response.ok) {
                    const responseData = await response.json();
                    console.log('API Response:', responseData);
                    displayMessage(responseData.response, "user");
                } else {
                    console.error('API request failed:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error making API request:', error);
            }

            messageInput.value = "";
        }
    });

    function displayMessage(message, sender) {
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";

        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = message;

        messageContainer.appendChild(messageDiv);
        chatMessages.appendChild(messageContainer);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
