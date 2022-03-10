/**
 * @file
 * @date 2021-07-15
 * @author zhoubin
 * @lastModify zhoubin 2021-07-15
 */

/**
 * login reducer
 */
export interface LoginReducer {
    loginStatus: boolean;
    ajax?: {
        data: unknown;
        message: string;
        isLoading: boolean;
        status: boolean;
    };
}

//action types
export enum ACTION_TYPE {
    FIRST_ENTRY_CHECK = 'FIRST_ENTRY_CHECK',
    LOGIN_STATUS_UPDATE = 'LOGIN_SUCCESS',
    SESSION_STATUS_CHECK = 'SESSION_STATUS_CHECK',
    GET_USER_INFO = 'GET_USER_INFO',
    INIT_STATE = 'INIT_STATE',
}

/**
 * first entry check
 */
interface FirstEntryCheckAction {
    type: ACTION_TYPE.FIRST_ENTRY_CHECK;
    payload: { code: string; session_state: string };
}

/**
 * change login status
 */
interface LoginStatueChangeAction {
    type: ACTION_TYPE.LOGIN_STATUS_UPDATE;
    payload: { status: boolean };
}
/**
 * check login status
 */
interface sessionStateCheckAction {
    type: ACTION_TYPE.SESSION_STATUS_CHECK;
}

/**
 * init data
 */
interface initialStateAction {
    type: ACTION_TYPE.INIT_STATE;
}

export type LoginTypes =
    | FirstEntryCheckAction
    | LoginStatueChangeAction
    | sessionStateCheckAction
    | initialStateAction;

export type { FirstEntryCheckAction };
