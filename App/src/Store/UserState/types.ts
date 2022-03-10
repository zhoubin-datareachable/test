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
    GET_USER_INFO = 'GET_USER_INFO',
    UPDATE_USER_INFO = 'UPDATE_USER_INFO',
    UPDATE_USER_ROLE_SAGA = 'UPDATE_USER_ROLE_SAGA',
    UPDATE_USER_ROLE = 'UPDATE_USER_ROLE',
}
/**
 * user state
 */
export interface UserInfoType {
    dri: string;
    name: string;
    gender: string;
    birthday: string;
    email: string;
    mobile: {
        country: string;
        number: string;
    };
    avatar: string;
}
/**
 * get user info
 */
interface GetUserInfoSaga {
    type: ACTION_TYPE.GET_USER_INFO;
}
/**
 * update user info action
 */
interface UpdateUserInfoAction {
    type: typeof ACTION_TYPE.UPDATE_USER_INFO;
    payload: {
        userInfo: UserInfoType;
    };
}
/**
 * update user role saga
 */
export interface UpdateUserRoleSaga {
    type: typeof ACTION_TYPE.UPDATE_USER_ROLE_SAGA;
    payload: {
        userRole: string;
    };
}
/**
 * update user role
 */
interface UpdateUserRoleAction {
    type: typeof ACTION_TYPE.UPDATE_USER_ROLE;
    payload: {
        userRole: string;
    };
}
/**
 * user reducer
 */
export type UserReducer = {
    userInfo: UserInfoType;
    userRole: string;
};
/**
 * user actionType
 */
export type UserActionTypes =
    | GetUserInfoSaga
    | UpdateUserInfoAction
    | UpdateUserRoleAction
    | UpdateUserRoleSaga;
