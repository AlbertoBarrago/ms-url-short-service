import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BITLY_ACCESS_TOKEN = process.env.BITLY_ACCESS_TOKEN;

if (!BITLY_ACCESS_TOKEN) {
    throw new Error('Bitly access token is not defined');
}

const bitlyApiUrl = 'https://api-ssl.bitly.com/v4/shorten';

export const shortenUrl = async (longUrl: string): Promise<string> => {
    try {
        const response = await axios.post(
            bitlyApiUrl,
            { long_url: longUrl },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${BITLY_ACCESS_TOKEN}`
                }
            }
        );
        return response.data.link;
    } catch (error) {
        console.error('Error shortening URL:', error);
        throw new Error('Could not shorten URL');
    }
};

export default shortenUrl;
