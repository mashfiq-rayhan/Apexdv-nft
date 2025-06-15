import axios from 'axios';

export const sendMessage = async (message) => {
    const response = await axios.post('/message', message);
    return response.data;
}