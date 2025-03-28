import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    // request interceptor to add 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        if(token){
        config.headers.authorization = `Bearer ${token}`;
    }
        return config;
    },  
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, 
    async (error) => {
        if(error.response){
        const status = error.response.status;
        console.log('status error in the interceptor', status)
        // for 401 or 403 logout 
        if(status === 401 || status === 403){
            await logout();
        navigate('/login')
        }
    } else{
        console.error('Error without response:', error)
    }
        return Promise.reject(error);
    }
);
    return axiosSecure;
 
};

export default useAxiosSecure;