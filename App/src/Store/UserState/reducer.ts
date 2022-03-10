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

const initialState: types.UserReducer = {
    userInfo: {
        dri: '',
        name: '',
        gender: '',
        birthday: '',
        email: '',
        mobile: {
            country: '',
            number: '',
        },
        avatar: '',
    },
    userRole: 'client',
};

export default (state = initialState, action: types.UserActionTypes): types.UserReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_USER_INFO:
            return {
                ...state,
                userInfo: { ...action.payload.userInfo },
            };
        case types.ACTION_TYPE.UPDATE_USER_ROLE:
            return {
                ...state,
                userRole: action.payload.userRole,
            };
        default:
            return state;
    }
};
