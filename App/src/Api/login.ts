/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin  2021-07-15
 */
import axios from './interceptor';
import { AxiosResponse } from 'axios';

/**
 * ajax response
 */
export interface AjaxResponse<T = Record<string, unknown>> {
    status: number;
    headers: { 'dr-auth': string };
    data: {
        code: number;
        message: string;
        data: T;
    };
}
/**
 * send first entry request
 */
export const firstEntryCheck = (data: {
    code: string;
    session_state: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: `/entry/db_info`,
        data,
    });
};

/**
 * check session state
 */
export const sessionStateCheck = (): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: `/session/status`,
    });
};
