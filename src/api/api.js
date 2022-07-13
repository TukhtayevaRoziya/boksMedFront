import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
