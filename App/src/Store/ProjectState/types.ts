/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
/**
 * action types
 */
export enum ACTION_TYPE {
    GET_PROJECTS = 'GET_PROJECTS',
    UPDATE_PROJECTS = 'UPDATE_PROJECTS',
    UPDATE_CURRENT_PROJECT_SAGA = 'UPDATE_CURRENT_PROJECT_SAGA',
    UPDATE_CURRENT_PROJECT = 'UPDATE_CURRENT_PROJECT',
}

/**
 * project
 */
export interface ProjectType {
    project_name: string;
    project_dri: string;
    owner_organization_name: string;
    owner_organization_dri: string;
    organization_logo_url?: string;
}

/**
 * get projects saga
 */
export interface GetProjectsSaga {
    type: ACTION_TYPE.GET_PROJECTS;
}
/**
 * update projects action
 */
interface UpdateProjectsAction {
    type: ACTION_TYPE.UPDATE_PROJECTS;
    payload: {
        projects: Array<ProjectType>;
    };
}
/**
 * update current project saga
 */
export interface UpdateCurrentProjectSaga {
    type: ACTION_TYPE.UPDATE_CURRENT_PROJECT_SAGA;
    payload: {
        project: ProjectType;
    };
}
/**
 * update current Project action
 */
interface UpdateCurrentProjectAction {
    type: ACTION_TYPE.UPDATE_CURRENT_PROJECT;
    payload: {
        project: ProjectType;
    };
}
/**
 * project reducer
 */
export interface ProjectReducer {
    projects: Array<ProjectType>;
    currentProject: ProjectType;
}
/**
 * project actionType
 */
export type ProjectActionTypes =
    | GetProjectsSaga
    | UpdateProjectsAction
    | UpdateCurrentProjectSaga
    | UpdateCurrentProjectAction;
