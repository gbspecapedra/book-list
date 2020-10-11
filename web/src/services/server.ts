import axios from 'axios';

export const server = axios.create({
  baseURL: 'https://openlibrary.org/api',
});
