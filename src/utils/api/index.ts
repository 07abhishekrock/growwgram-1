import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.CLIENT_ID}`,
  },
});

export * from "./feed";
