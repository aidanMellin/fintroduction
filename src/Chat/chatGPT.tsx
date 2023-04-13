import axios from 'axios';

const LAMBDA_API_URL = 'https://p2iz0asoqc.execute-api.us-east-1.amazonaws.com/default/chatGPTQuery_Backend';

interface LambdaResponse {
    message: string;
}

const chatGPT = async (prompt: string): Promise<string> => {
    try {
        console.log('Prompt:', prompt); // Debugging: Check the prompt being sent

        const response = await axios.post<{ message: string }>(
            LAMBDA_API_URL,
            {
                prompt: prompt,
            }
        );

        console.log('Response:', response); // Debugging: Check the response received

        if (response.data && response.data.message) {
            return response.data.message.trim();
        } else {
            throw new Error('Invalid or incomplete response from the API');
        }
    } catch (error) {
        console.error(error);
        return 'An error occurred while processing your request.';
    }
};


export default chatGPT;