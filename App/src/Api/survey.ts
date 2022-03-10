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
 * create survey no binding
 */
export const createSurvey = (data: {
    survey_name: string;
    organization_dri: string;
    template_dri?: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/survey/create_no_binding',
        data,
    });
};

/**
 * check whether the survey name exists
 */
export const checkSurveyNameExists = (data: {
    survey_name: string;
    organization_dri: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/check_exists/survey/name',
        data,
    });
};
/**
 * star survey
 */
export const starSurvey = (data: { survey_dri: string; star: number }): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/update/survey/star',
        data,
    });
};

/**
 * get all survey by client
 */
export const getAllSurveyByClient = (data: {
    organization_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/client/freely',
        data,
    });
};
/**
 * get all survey by supplier
 */
export const getAllSurveyBySupplier = (data: {
    organization_dri: string;
    talent_group_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/supplier/freely',
        data,
    });
};

/**
 * get project related survey by client
 */
export const getProjectRelatedSurveyByClient = (data: {
    organization_dri: string;
    project_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/client/project/freely',
        data,
    });
};
/**
 * get project related survey by supplier
 */
export const getProjectRelatedSurveyBySupplier = (data: {
    organization_dri: string;
    talent_group_dri: string;
    project_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/supplier/project/freely',
        data,
    });
};
/**
 * get starred survey by client
 */
export const getStarredSurveyByClient = (data: {
    organization_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/client/starred/freely',
        data,
    });
};
/**
 * get starred survey by supplier
 */
export const getStarredSurveyBySupplier = (data: {
    organization_dri: string;
    talent_group_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/supplier/starred/freely',
        data,
    });
};
/**
 * get starred survey by unbound
 */
export const getUnBoundSurveyByClient = (data: {
    organization_dri: string;
    item_start_number: number;
    request_item_number: number;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_briefs/client/unbound/freely',
        data,
    });
};
/**
 * survey rename
 */
export const surveyRename = (data: {
    survey_dri: string;
    survey_new_name: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/modify/survey/name',
        data,
    });
};

/**
 * get category number by client
 */
export const getCategoryByClient = (data: { organization_dri: string }): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_count/client',
        data,
    });
};
/**
 * get category number by supplier
 */
export const getCategoryBySupplier = (data: {
    organization_dri: string;
    talent_group_dri: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/get/survey_count/supplier',
        data,
    });
};

/**
 * add deliverable tag
 */
export const addDeliverableTag = (data: {
    deliverable_dri: string;
    tag_to_be_added: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/update/deliv/tags/add',
        data,
    });
};

/**
 * delete deliverable tag
 */
export const deleteDeliverableTag = (data: {
    deliverable_dri: string;
    tag_to_be_deleted: string;
}): Promise<AxiosResponse> => {
    return axios.request({
        method: 'post',
        url: '/dashboard/update/deliv/tags/delete',
        data,
    });
};
