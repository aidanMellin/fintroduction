import React, { useState } from 'react';
import chatGPT from './chatGPT';
import '../styles/ChatBox.css'

export interface Message {
    sender: 'user' | 'ai';
    text: string;
}

interface ChatBoxProps {
    onClose: () => void;
    chatHistory: Message[];
    setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
    historicalQuestions: string[];
    setHistoricalQuestions: React.Dispatch<React.SetStateAction<string[]>>;
}

const ChatBox: React.FC<ChatBoxProps> = ({
    onClose,
    chatHistory,
    setChatHistory,
    historicalQuestions,
    setHistoricalQuestions,
}) => {
    const [message, setMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setHistoricalQuestions([...historicalQuestions, message]);

        setChatHistory([...chatHistory, { sender: 'user', text: message }]);
        setMessage('');

        const response = await chatGPT(`${message}`);
        setChatHistory([
            ...chatHistory,
            { sender: 'user', text: message },
            { sender: 'ai', text: response },
        ]);
    };

    return (
        <div className="chat-container">
            <div className="button-container">
                <button className="chat-header__close-btn" onClick={onClose}>
                    -
                </button>
            </div>
            <div className="chat-history">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        <div className={`chat-message-bubble ${message.sender}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input className="chat-input" type="text" value={message} onChange={handleChange} />
                <button className="chat-submit" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBox;
