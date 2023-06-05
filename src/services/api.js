import axios from 'axios';
//configuración inicial del axios

const API_BASE_URL = 'http://localhost:3000';
// http://localhost:3000

// https://pushy-elated-pond.glitch.me/

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});