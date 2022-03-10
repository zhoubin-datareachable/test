/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { combineReducers } from 'redux';
import loginState from './LoginState/reducer';
import userState from './UserState/reducer';
import organizationState from './OrganizationState/reducer';
import projectState from './ProjectState/reducer';
import talentGroupState from './TalentGroupState/reducer';
// import homePageReducer from './HomePage/reducer';
import categoryState from './CategoryState/reducer';
import surveyState from './SurveyState/reducer';
// import demoReducer from './moduleA/reducer';

// combine all the reducer in here
const rootReducer = combineReducers({
    loginState,
    userState,
    // homePageReducer,
    organizationState,
    talentGroupState,
    projectState,
    categoryState,
    surveyState,
});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
