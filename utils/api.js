import axios from "axios";
import { serverUrl } from "./config";

const apiClient = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
});

export default apiClient;
