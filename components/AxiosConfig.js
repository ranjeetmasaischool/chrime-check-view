// utils/axiosConfig.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://crimesearch.in/', // Set your base URL here
});

export default API;
