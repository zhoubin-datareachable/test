/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
import * as types from './types';
/**
 * get projects saga
 */
const getProjectsSaga = (): types.ProjectActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_PROJECTS,
    };
};
/**
 * update projects
 */
const updateProjectsAction = (projects: Array<types.ProjectType>): types.ProjectActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_PROJECTS,
        payload: {
            projects,
        },
    };
};
/**
 * update current project saga
 */
const updateCurrentProjectSaga = (project: types.ProjectType): types.ProjectActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_PROJECT_SAGA,
        payload: {
            project,
        },
    };
};
/**
 * update current project action
 */
const updateCurrentProjectAction = (project: types.ProjectType): types.ProjectActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_PROJECT,
        payload: {
            project,
        },
    };
};

export {
    getProjectsSaga,
    updateProjectsAction,
    updateCurrentProjectSaga,
    updateCurrentProjectAction,
};
