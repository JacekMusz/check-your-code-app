import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://www.deepcode.ai/publicapi/",
  timeout: 4000,
  headers: {
    "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
  },
});
