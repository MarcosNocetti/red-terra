import axios from "axios";

const api = axios.create({
  baseURL: `https://api.redterrastudios.com`,
  // baseURL: "http://localhost:8080",
});

export const contentTypeHeader = {
  "Content-Type": "application/json",
};

api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJGcm9udCBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyLCJlbWFpbCI6ImFkbUBhZG0uY29tIiwiYWN0aXZlIjp0cnVlfQ.aL2ddyvRZxY-89HjsHYO9YrHt-6Xt9J9VoQA5LxaJFE`;

export default api;
