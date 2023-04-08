import axios from 'axios';
import { serverUrl } from '../utils/config';
 
const apiClient = axios.create({
    Accept: 'application/json',
    baseURL: serverUrl,
    withCredentials: true,
});
 
export default apiClient;