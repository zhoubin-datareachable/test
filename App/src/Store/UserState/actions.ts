/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
import * as types from './types';
/**
 * get user info
 */
const getUserInfoSaga = (): types.UserActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_USER_INFO,
    };
};
/**
 * update user info
 */
const updateUserInfoAction = (userInfo: types.UserInfoType): types.UserActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_USER_INFO,
        payload: {
            userInfo,
        },
    };
};
/**
 * update user role saga
 */
const updateUserRoleSaga = (userRole: string): types.UserActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_USER_ROLE_SAGA,
        payload: {
            userRole,
        },
    };
};
/**
 * update user role
 */
const updateUserRoleAction = (userRole: string): types.UserActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_USER_ROLE,
        payload: {
            userRole,
        },
    };
};
export { getUserInfoSaga, updateUserInfoAction, updateUserRoleAction, updateUserRoleSaga };
