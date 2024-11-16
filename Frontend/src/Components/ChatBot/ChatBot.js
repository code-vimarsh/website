import React, { useState } from 'react';
import './Chatbot.css';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const startingMessage = {text: "Hello, I am here to help you with any queries regarding the usage of this website..!!", isUser: false}
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([startingMessage]);
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, isUser: true }];
      setMessages(newMessages);
      setInput('');

      const inputData = {
        'input' : input
      }

      const response = await fetch('http://127.0.0.1:5050/browse-buddy',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(inputData)
      });

      const data = await response.json();
      const URL = data.result
      
      if( URL !== "Whoops! I don't have that info, but I can help you find something else!"){
        if(URL === 'https://mail.google.com/mail/u/0/?to=codingclub-cse@msubaroda.ac.in&fs=1&tf=cm'){
          window.open(URL, "_blank");
        }
        else{
          const relativePath = URL.replace("https://codevimarsh.onrender.com","")
          navigate(relativePath);
        }
      }

      // Simulate bot response
      setMessages(prevMessages => [
        ...prevMessages,
        { text: URL, isUser: false }
      ]);
  
    }
  };

  return (
    <div className="chatbot-container">
      { !isOpen && (   
        <button className="chatbot-button" onClick={toggleChat}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <span className="chat-title">Chat Support</span>
            <button className="chatbot-button-X" onClick={toggleChat}>
              X
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            >
            </input>
            <button onClick={handleSendMessage} className="send-button">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
