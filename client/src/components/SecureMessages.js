import React, { useState, useEffect } from 'react';
import './SecureMessages.css';

const SecureMessaging = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulating received messages from customer support
  useEffect(() => {
    // Replace with actual backend integration to receive messages
    const receivedMessages = [
      { id: 1, sender: 'customer-support', timestamp: new Date(), content: 'Thank you for contacting us. How can we assist you?' },
      { id: 2, sender: 'user', timestamp: new Date(), content: 'I have a question about a recent transaction.' },
    ];

    // Update the message state with the received messages
    setMessages(receivedMessages);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() === '') {
      return;
    }

    const newSentMessage = {
      id: Date.now(),
      sender: 'user',
      timestamp: new Date(),
      content: newMessage,
    };

    // Update the message state with the new sent message
    setMessages((prevMessages) => [...prevMessages, newSentMessage]);

    // Reset the new message input field
    setNewMessage('');

    // Simulating a reply from customer support
    const replyDelay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1 to 4 seconds
    setIsLoading(true); // Display a loading indicator
    setTimeout(() => {
      const replyMessage = {
        id: Date.now(),
        sender: 'customer-support',
        timestamp: new Date(),
        content: 'Thank you for your inquiry. Our team will respond to you shortly.',
      };

      // Update the message state with the reply message
      setMessages((prevMessages) => [...prevMessages, replyMessage]);
      setIsLoading(false); // Hide the loading indicator
    }, replyDelay);
  };

  const handleDeleteMessage = (id) => {
    // Filter out the message with the specified id from the message state
    setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
  };

  return (
    <div className="secure-messaging-container">
      <h2>Secure Messaging</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-timestamp">{message.timestamp.toLocaleString()}</div>
            <div className="message-content">{message.content}</div>
            {message.sender === 'user' && (
              <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            )}
          </div>
        ))}
        {isLoading && <div className="loading-indicator">Loading...</div>}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SecureMessaging;
