/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */
import * as types from './types';

/**
 * first entry check action
 */
export const firstEntryCheck = (payload: {
    code: string;
    session_state: string;
}): types.LoginTypes => {
    return {
        type: types.ACTION_TYPE.FIRST_ENTRY_CHECK,
        payload,
    };
};

/**
 * change login status action
 */
export const loginStatusUpdate = (payload: { status: boolean }): types.LoginTypes => {
    return {
        type: types.ACTION_TYPE.LOGIN_STATUS_UPDATE,
        payload,
    };
};
/**
 * check login status action
 */
export const sessionStateCheck = (): types.LoginTypes => {
    return {
        type: types.ACTION_TYPE.SESSION_STATUS_CHECK,
    };
};

/**
 * init data
 */
export const initialState = (): types.LoginTypes => {
    return {
        type: types.ACTION_TYPE.INIT_STATE,
    };
};
