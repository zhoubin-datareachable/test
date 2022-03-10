/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin  2021-07-15
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import axios from './interceptor';
import { AxiosResponse } from 'axios';

/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/**
 * get user info
 */
export const getUserInfo = (): Promise<AxiosResponse> => {
    return axios.request({
        method: 'get',
        url: `/info`,
    });
};

/**
 * get user organizations
 */
export const getUserOrganizations = (): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: `/org/get_user_orgs`,
    });
};
/**
 * get project list by client
 */
export const getProjectListByClient = (organization_dri: string): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/projects/client',
        data: { organization_dri },
    });
};
/**
 * get project List by supplier
 */
export const getProjectListBySupplier = (data: {
    organization_dri: string;
    talent_group_dri: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/projects/supplier',
        data,
    });
};
/**
 * get organization logo
 */
export const getOrganizationsLogo = (data: {
    organization_dris: Array<string>;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/org/logos',
        data,
    });
};
/**
 * get all the Talent Groups to which user belongs
 */
export const getUserTalentGroups = (organization_dri: string): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/org/user_tg',
        data: { organization_dri },
    });
};

/**
 * get organization logo by organization dri
 */
export const getOrganizationLogoByDri = (data: {
    organization_dri: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/org/logo',
        data,
    });
};
