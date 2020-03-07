import axios from "axios";

export const publicApi = axios.create({
  baseURL: "https://www.deepcode.ai/publicapi/",
  timeout: 4000,
  headers: {
    "Session-Token":
      "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
  }
});
