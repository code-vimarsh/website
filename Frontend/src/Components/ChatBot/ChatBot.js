import React, { useState } from 'react';
import './Chatbot.css';
import { Bot, X, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const startingMessage = {text: "Hello, I am here to help you with any queries regarding the usage of this website..!!", isUser: false, timeOfMsg: new Date()}
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([startingMessage]);
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, isUser: true, timeOfMsg: new Date() }];
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
      
      console.log(URL)

      if( ((""+URL).startsWith("http"))){
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
        { text: URL, isUser: false, timeOfMsg: new Date(), }
      ]);
  
    }
  };

  return (
    <div className="chatbot-container">
      { !isOpen && (   
        <button className="chatbot-button" onClick={toggleChat}>
          <Bot className="bot-icon" />
        </button>
      )}

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <div className="header-title">
              <Bot className="header-icon" />
              <h5 style={{marginBottom: '0px'}}>Chat Support</h5>
            </div>

            <div className="header-actions">
              <button className="header-button" onClick={toggleChat}>
                <X />
              </button>
            </div>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-container ${msg.isUser ? 'user' : 'bot'}`}>
                <div className="message">
                  <p className="message-text-content">{msg.text}</p>
                  <span className="timestamp">
                    {msg.timeOfMsg.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            >
            </input>
            <button onClick={handleSendMessage} className="send-button"><Send className="send-icon" /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
