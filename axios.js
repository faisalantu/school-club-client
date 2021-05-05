import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        "Content-Type": "application/json",
    }
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...
instance.interceptors.request.use(request => {
    
    // Edit request config
    const token = localStorage.getItem("token");
    if (token) {
        request.defaults.headers.common['x-auth-token'] = token;
    }
    console.log("[request send-]",request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log("[response recived-]",response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;