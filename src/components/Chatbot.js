import React, { useState, useEffect, useRef } from "react";
import "../styles/chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! How can I assist you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto scroll on new messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Toggle chatbot open/close
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending messages
  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      // Store the current message
      const currentMessage = message.trim();
      
      // Clear input and add user message
      setMessage("");
      setMessages(prev => [...prev, { type: 'user', text: currentMessage }]);
      setIsLoading(true);

      // Send request to backend
      const response = await fetch('http://localhost:3000/api/ai/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: currentMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, { type: 'bot', text: data.answer }]);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'I apologize, but I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard submit
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-icon" 
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        <img 
          src="/assets/images/chatbot-avatar.jpg" 
          alt="Chatbot Avatar" 
          width="30" 
          height="30"
        />
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>MCA Software Solutions Assistant</h3>
            <button 
              className="close-btn" 
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`message ${msg.type}`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="typing-indicator">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
              <div ref={messagesEndRef} /> {/* Scroll anchor */}
            </div>
          </div>

          <div className="chatbot-input">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              disabled={isLoading}
              rows="1"
              aria-label="Chat input"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !message.trim()}
              className="send-button"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;