import { useState } from 'react';
import '@/components/ui/chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [context, setContext] = useState('');

    const toggleChat = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            setInputMessage('');
            const userMessage = `You: ${inputMessage}`;
            setMessages((prevMessages) => [...prevMessages, userMessage]);

            try {
                const response = await fetch('http://127.0.0.1:5000/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ context, question: inputMessage }),
                });

                const data = await response.json();
                const botResponse = `Bot: ${data.response}`;
                setMessages((prevMessages) => [...prevMessages, botResponse]);
                setContext(data.context);
            } catch (error) {
                console.error('Error communicating with chatbot:', error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    'Bot: Sorry, something went wrong!',
                ]);
            }

            setInputMessage('');
        }
    };

    return (
        <div>
            <button
                className="chatbot-button"
                onClick={toggleChat}
                aria-label="Open Chat"
            >
                🤖
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Chat with Bot</h3>
                        <button onClick={toggleChat}>X</button>
                    </div>
                    <div className="chatbot-body">
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className="message">
                                    {msg}
                                </div>
                            ))}
                        </div>
                        <div className="input-area">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type a message..."
                            />
                            <button onClick={handleSendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
