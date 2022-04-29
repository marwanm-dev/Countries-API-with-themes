import axios from 'axios';
const BASE_URL = 'https://restcountries.com/v3.1/all';

// Create Axios Instance
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
