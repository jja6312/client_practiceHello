import axios from "axios";

const api = axios.create({
  baseURL: "https://practicehello.store/api/guestbook",
});
export const fetchMessages = () => api.get("");
export const postMessage = (data) => api.post("", data);
