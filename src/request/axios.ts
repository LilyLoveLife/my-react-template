/*
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Projects/my-react-template/src/request/axios.js
 */

import axios from 'axios'
import config from 'config'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

declare module 'axios' {
    interface AxiosResponse {
        success: boolean;
        pageNo ? : number;
        pageSize ? : number;
        total ? : number;
        message ? : string;
    }
}

const axiosInstance = axios.create({
    baseURL: config.API_URL,
    timeout: 3000
});
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const newHeaders = Object.assign(config.headers, {
            'TEST-TOKEN': localStorage.getItem('TEST_TOKEN')
        });
        const newConfig = Object.assign({}, config, { headers: newHeaders });
        return newConfig;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // token 错误 重新登陆
        if (response.data?.success === false && response.data?.errCode === 402) {
            goLogin();
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

const goLogin = () => {
    localStorage.removeItem('TEST_TOKEN');

    const { location } = window;
    console.log('go login hash:', location.hash);
    if (location.hash.match('/login')) return;
    const url = `${location.origin + location.pathname}#/login`;
    console.log('go login url:', url);
    location.href = url;
};

class Axois {
    request(config: object) {
        return axiosInstance.request(config);
    }
    get(url: string, data: object = {}) {
        let config = {
            method: 'GET',
            url: url,
            params: data
        };
        return this.request(config);
    }
    post(url: string, data: object = {}) {
        let config = {
            method: 'POST',
            url: url,
            data: data
        };
        return this.request(config);
    }
    delete(url: string, data: object = {}) {
        let config = {
            method: 'DELETE',
            url: url,
            params: data
        };
        return this.request(config);
    }
    put(url: string, data: object = {}) {
        let config = {
            method: 'PUT',
            url: url,
            data: data
        };
        return this.request(config);
    }
}

export default new Axois();