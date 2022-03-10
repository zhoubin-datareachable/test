/**
 * @file
 * @date 2021-10-16
 * @author zhoubin
 * @lastModify zhoubin 2021-10-16
 */
import * as types from './types';
/**
 * get  talent group saga
 */
const getTalentGroupsSaga = (): types.TalentGroupActionTypes => {
    return {
        type: types.ACTION_TYPE.GET_TALENT_GROUPS,
    };
};
/**
 * update talent group
 */
const updateTalentGroupsAction = (
    talentGroups: Array<types.TalentGroupType>,
): types.TalentGroupActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_TALENT_GROUPS,
        payload: {
            talentGroups,
        },
    };
};
/**
 * update current talent group saga
 */
const updateCurrentTalentSaga = (talentGroupDri: string): types.TalentGroupActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_TALENT_SAGA,
        payload: {
            talentGroupDri,
        },
    };
};
/**
 * update current talent group action
 */
const updateCurrentTalentGroup = (talentGroupDri: string): types.TalentGroupActionTypes => {
    return {
        type: types.ACTION_TYPE.UPDATE_CURRENT_TALENT,
        payload: {
            talentGroupDri,
        },
    };
};

export {
    getTalentGroupsSaga,
    updateTalentGroupsAction,
    updateCurrentTalentSaga,
    updateCurrentTalentGroup,
};
