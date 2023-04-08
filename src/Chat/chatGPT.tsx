import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// const OPENAI_API_KEY="test";
const API_URL = 'https://api.openai.com/v1/chat/completions';

interface ChatResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    choices: {
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
        index: number;
    }[];
}

const chatGPT = async (prompt: string): Promise<string> => {
    console.log(OPENAI_API_KEY);
    try {
        const response = await axios.post<ChatResponse>(
            API_URL,
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: prompt },
                ],
                max_tokens: 50, // Adjust this value based on your requirements
                n: 1,
                stop: ['\n'], // Adding a stop sequence
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                },
            },
        );

        if (
            response.data.choices &&
            response.data.choices[0].message &&
            response.data.choices[0].message.content
        ) {
            return response.data.choices[0].message.content.trim();
        } else {
            throw new Error('Invalid or incomplete response from the API');
        }
    } catch (error) {
        console.error(error);
        return 'An error occurred while processing your request.';
    }
};

export default chatGPT;
