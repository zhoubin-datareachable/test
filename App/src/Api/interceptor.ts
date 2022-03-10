/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify  2021-07-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import mainDomain from './mainDomain';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

// create a axios instanse
const service = axios.create({
    baseURL: mainDomain, // api base_url
    timeout: 10000, // request timeout
});

// request interceptors
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const jwt = window.localStorage.getItem('jwt');
        if (jwt) {
            // eslint-disable-next-line
            config.headers['DR-AUTH'] = jwt;
        }

        if (config.url) {
            if (config.url.indexOf('avatar') !== -1) {
                // eslint-disable-next-line
                config.headers['Content-Type'] = 'multipart/form-data';
            }
        }

        return config;
    },
    (error: AxiosError) => {
        console.log('request error-->', error); // for debug
        return error;
    },
);

// response interceptors
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // console.log('response-->', response);
        return response;
    },
    (error: AxiosError) => {
        console.log('response error-->', error);
        if (error.response) {
            return error.response;
        }
    },
);

export default service;
