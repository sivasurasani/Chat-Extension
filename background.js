// // background.js

// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//     if (request.action === "sendMessage") {
//         var messageContent = request.value;
//         console.log("Received message:", messageContent);
        
//         try {
//             const response = await fetch('http://127.0.0.1:8005/get-response', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     input: messageContent,
//                 }),
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 console.log('API Response:', responseData.response);

//                 // Send a message to the content script with the API response
//                 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//                     const activeTab = tabs[0];
//                     chrome.tabs.sendMessage(activeTab.id, {
//                         action: "receiveMessage",
//                         value: responseData.response,
//                     });
//                 });
//             } else {
//                 console.error('API request failed:', response.status, response.statusText);
//             }
//         } catch (error) {
//             console.error('Error making API request:', error);
//         }
//     }
// });
