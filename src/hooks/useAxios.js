import { useState } from "react";

const useAxios = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;
        try {
            setLoading(true);
            await axiosInstance[method.toLowerCase()](url, requestConfig);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return [axiosFetch, error, loading];
}

export default useAxios