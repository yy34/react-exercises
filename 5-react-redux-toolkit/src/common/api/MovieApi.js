import axios from "axios";
const APIKey = import.meta.env.VITE_APP_API_KEY;
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
});

const responseBody = (response) => response.data;
const request = {
  get: (url) => instance.get(url).then(responseBody),
};
export const MovieService = {
  getMovies: (search) =>
    request.get(`?apiKey=${APIKey}&s=${search}&type=movie`),
};
