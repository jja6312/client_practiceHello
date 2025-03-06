import axios from "axios";

const api = axios.create({
  baseURL: "http://64.110.84.61:8080/api/guestbook",
});

export const fetchMessages = () => api.get("");
export const postMessage = (data) => api.post("", data);
