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
    GET_TALENT_GROUPS = 'GET_TALENT_GROUPS',
    UPDATE_TALENT_GROUPS = 'UPDATE_TALENT_GROUPS',
    UPDATE_CURRENT_TALENT_SAGA = 'UPDATE_CURRENT_TALENT_SAGA',
    UPDATE_CURRENT_TALENT = 'UPDATE_CURRENT_TALENT',
}

/**
 * talent group
 */
export interface TalentGroupType {
    talent_group_dri: string;
    talent_group_name: string;
}

/**
 * get talentGroup saga
 */
export interface GetTalentGroupsSaga {
    type: ACTION_TYPE.GET_TALENT_GROUPS;
}
/**
 * update talent groups action
 */
interface UpdateTalentGroupsAction {
    type: ACTION_TYPE.UPDATE_TALENT_GROUPS;
    payload: {
        talentGroups: Array<TalentGroupType>;
    };
}

/**
 * update current talent group saga
 */
export interface UpdateCurrentTalentSaga {
    type: ACTION_TYPE.UPDATE_CURRENT_TALENT_SAGA;
    payload: {
        talentGroupDri: string;
    };
}
/**
 * update current talent group action
 */
interface UpdateCurrentTalentAction {
    type: ACTION_TYPE.UPDATE_CURRENT_TALENT;
    payload: {
        talentGroupDri: string;
    };
}
/**
 * talent group reducer
 */
export interface TalentGroupReducer {
    talentGroups: Array<TalentGroupType>;
    currentTalentGroupDri: string;
}
/**
 * talent group actionType
 */
export type TalentGroupActionTypes =
    | GetTalentGroupsSaga
    | UpdateTalentGroupsAction
    | UpdateCurrentTalentSaga
    | UpdateCurrentTalentAction;
