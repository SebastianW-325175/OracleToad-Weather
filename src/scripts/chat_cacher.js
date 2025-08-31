import { addBubble } from "./main";

let chatHistory = [];
let cachedChatHistory = localStorage.getItem("chatHistory");

if(cachedChatHistory != null){
    chatHistory = JSON.parse(cachedChatHistory);
    for(let bubble = chatHistory.length-1; bubble >= 0; bubble--){
        addBubble(chatHistory[bubble])
    }
}

window.addEventListener("pagehide", () => {
    chatHistory = [];
    const chatContainer = document.getElementById("chatContainer");
    for(let bubble of chatContainer.children){
        if(chatHistory.length == 14) break;
        chatHistory.push(bubble.innerHTML);
    }
    
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory)); 
});