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

const initialState: types.OrganizationReducer = {
    organizations: [],
    currentOrg: {
        organization_dri: '',
        organization_name: '',
        organization_logo: '',
    },
};

export default (
    state = initialState,
    action: types.OrganizationActionTypes,
): types.OrganizationReducer => {
    switch (action.type) {
        case types.ACTION_TYPE.UPDATE_ORGANIZATIONS:
            return {
                ...state,
                organizations: [...action.payload.organizations],
            };
        case types.ACTION_TYPE.UPDATE_CURRENT_ORG:
            return {
                ...state,
                currentOrg: action.payload.org,
            };
        default:
            return state;
    }
};
