import React, { useState } from 'react';
import ChatBox, { Message } from './ChatBox';

const Chat: React.FC = () => {
    const [showChatBox, setShowChatBox] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [historicalQuestions, setHistoricalQuestions] = useState<string[]>([]);

    const handleIconClick = () => {
        setShowChatBox(!showChatBox);
    };

    return (
        <div className="ChatIntegration">
            {showChatBox && (
                <ChatBox
                    onClose={() => setShowChatBox(false)}
                    chatHistory={chatHistory}
                    setChatHistory={setChatHistory}
                    historicalQuestions={historicalQuestions}
                    setHistoricalQuestions={setHistoricalQuestions}
                />
            )}
            <button className="chat-icon" onClick={handleIconClick}>
                {showChatBox ? '-' : '+'}
            </button>
        </div>
    );
};

export default Chat;
