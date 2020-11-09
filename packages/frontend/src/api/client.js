import axios from "axios";

export default axios.create({
  // ... base client
  baseURL: "http://localhost:3001",
});
