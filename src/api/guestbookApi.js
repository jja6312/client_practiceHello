import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/guestbook",
});

export const fetchMessages = () => api.get("");
export const postMessage = (data) => api.post("", data);
