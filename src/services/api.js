import axios from 'axios';
//configuración inicial del axios

const API_BASE_URL = 'https://pushy-elated-pond.glitch.me/';
<<<<<<< HEAD
=======
// http://localhost:3000

>>>>>>> 81d5cf9beb86416df2e464eb100fe2afed85dee9

export const instanceAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});