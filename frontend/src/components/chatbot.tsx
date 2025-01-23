import { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [context, setContext] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        try {
            setIsLoading(true);
            // Add user message immediately
            const userMessage = `You: ${inputMessage}`;
            setMessages(prev => [...prev, userMessage]);
            
            const messageToSend = inputMessage.trim();
            setInputMessage(''); // Clear input immediately

            console.log('Sending request...');
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: messageToSend,
                    context: context
                })
            });

            console.log('Response status:', response.status);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
            }

            const data = await response.json();
            console.log('Response data:', data);

            if (data.error) {
                throw new Error(data.error);
            }

            const botResponse = `Bot: ${data.response}`;
            setMessages(prev => [...prev, botResponse]);
            setContext(data.context);

        } catch (error) {
            console.error('Error details:', error);
            setMessages(prev => [
                ...prev,
                'Bot: Sorry, I encountered an error while processing your message.'
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <button 
                className="chatbot-button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={isLoading}
            >
                🤖
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">{msg}</div>
                        ))}
                        {isLoading && (
                            <div className="message loading">Bot is typing...</div>
                        )}
                    </div>
                    <div className="input-area">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            disabled={isLoading}
                        />
                        <button 
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;