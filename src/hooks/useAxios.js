import { useState } from 'react';
import axios from '../api/axios';
import useAuth from './useAuth';
import AUTH_ROUTES from '../api/auth';

const _startInterceptors = ({ axiosFetch, _refresh, auth }) => {
    axios.interceptors.request.use(
        config => {
            const token = auth?.accessToken?.token;
            if (!config.headers['Authorization'] && token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        }, (error) => Promise.reject(error)
    );
    
    axios.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const { accessToken } = await _refresh();

                if (accessToken?.token) {
                    prevRequest.headers['Authorization'] = `Bearer ${accessToken.token}`;
                    return axiosFetch(prevRequest);
                } else {
                    throw new Error('Refresh token was not fetched successfully');
                }
            }
            return Promise.reject(error);
        }
    );
};

const useAxios = () => {
    const [hasInterceptors, setInterceptors] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useAuth();
    
    const axiosFetch = async (configObj) => {
        const {
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true);
            return await axios[method.toLowerCase()](url, requestConfig);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const _refresh = async () => {
        return await axiosFetch({
            method: 'POST',
            url: AUTH_ROUTES.AUTH_REFRESH_TOKENS,
        }).then(response => {
            const data = response?.data;
            if (data) {
                const { accessToken } = data;
                setAuth(prev => {
                    return { ...prev, accessToken, }
                });
            }
        });
    }

    if (!hasInterceptors) {
        _startInterceptors({ axiosFetch, _refresh, auth });
        setInterceptors(true);
    }

    return { axiosFetch, error, loading };
}

export default useAxios