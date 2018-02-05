import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://pizza4u-989f8.firebaseio.com/'
});

export default axiosInstance;