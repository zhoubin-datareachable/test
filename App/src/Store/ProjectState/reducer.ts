/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import * as types from './types';
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */

const initialState: types.ProjectReducer = {
    projects: [],
    currentProject: {
        project_name: '',
        project_dri: '',
        owner_organization_name: '',
        owner_organization_dri: '',
        organization_logo_url: '',
    },
};

export default (state = initialState, action: types.ProjectActionTypes): types.ProjectReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_PROJECTS:
            return {
                ...state,
                projects: [...action.payload.projects],
            };
        case types.ACTION_TYPE.UPDATE_CURRENT_PROJECT:
            return {
                ...state,
                currentProject: action.payload.project,
            };
        default:
            return state;
    }
};
