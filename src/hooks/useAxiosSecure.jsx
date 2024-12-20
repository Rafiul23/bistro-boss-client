import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();

    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('token');
        config.headers.authorization = `Bearer ${token}`
        
        return config;
    }, (err)=>{
        return Promise.reject(err);
    })

    axiosSecure.interceptors.response.use((res)=>{
        return res;
    }, async(err)=>{
        console.log(err);
        const status = err?.response?.status;

        if(status === 401 || status === 403){
          await logOut();
            navigate('/login');
        }
        return Promise.reject(err);    
    })

    return axiosSecure
};

export default useAxiosSecure;