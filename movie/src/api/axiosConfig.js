import axios from 'axios';

const API_KEY="4d6c3460d85e9b3cd2519ae31755276b";
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'en-US';

export default axios.create({
    baseURL: 'http://localhost:8081/api/v1',
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
    }
});