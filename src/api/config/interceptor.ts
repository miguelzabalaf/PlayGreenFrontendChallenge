import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from './../../../node_modules/axios/index.d';
import { useEffect } from "react";
import axios from 'axios';

function useInterceptor() {
    function handleRequestSuccess(
        request: InternalAxiosRequestConfig,
    ): InternalAxiosRequestConfig {
        const { headers } = request;
        if (headers) {
            headers['Content-Type'] = 'application/json';
            headers.accept = 'application/json';
        }
        return request;
    }

    function handleRequestError(error: unknown) {
        return error;
    }

    function handleResponseSuccess(response: AxiosResponse): AxiosResponse {
        response.config.timeout = 3000;
        return response;
    }

    const handleResponseError = (error: AxiosError) => {
        alert(error?.message);
        throw error;
    };
    useEffect(() => {
        axios.defaults.baseURL = `${ process.env.REACT_APP_API_URL }/v${ process.env.REACT_APP_API_URL_VERSION }`;
        axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
        axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
    }, []);
}

export default useInterceptor;