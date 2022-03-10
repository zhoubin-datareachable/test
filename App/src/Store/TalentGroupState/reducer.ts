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

const initialState: types.TalentGroupReducer = {
    talentGroups: [],
    currentTalentGroupDri: '',
};

export default (
    state = initialState,
    action: types.TalentGroupActionTypes,
): types.TalentGroupReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_TALENT_GROUPS:
            return {
                ...state,
                talentGroups: [...action.payload.talentGroups],
            };
        case types.ACTION_TYPE.UPDATE_CURRENT_TALENT:
            return {
                ...state,
                currentTalentGroupDri: action.payload.talentGroupDri,
            };
        default:
            return state;
    }
};
