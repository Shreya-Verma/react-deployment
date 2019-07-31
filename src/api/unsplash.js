import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fa347a863ca697fdd5d07d79d68c9b50830ae28f59c8175a726c0d19431ab4d5'
    }
});