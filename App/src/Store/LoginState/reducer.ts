/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
import * as types from './types';

const initialState: types.LoginReducer = {
    loginStatus: false,
};

export default (state = initialState, action: types.LoginTypes): types.LoginReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.LOGIN_STATUS_UPDATE:
            return {
                ...state,
                loginStatus: action.payload.status,
            };
        default:
            return state;
    }
};
