import axios, { AxiosInstance } from "axios";

const baseURL = "";

// I like to use the API URL as baseURL to avoid repetition of the URL in every call.
// However the example API provides pagination by calling the entire next page route
// instead of just providing next page number, I decided to do it this way.

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;