/**
 * @file root saga file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { all } from 'redux-saga/effects';
import loginSaga from './LoginState/sagas';
import userSaga from './UserState/sagas';
import organizationSaga from './OrganizationState/sagas';
import talentGroupSaga from './TalentGroupState/sagas';
import projectState from './ProjectState/sagas';
// import homePageSaga from './HomePage/sagas';
import categoryState from './CategoryState/sagas';
import surveysSaga from './SurveyState/sagas';

export default function* rootSaga(): Generator {
    try {
        yield all([
            // this is where the saga combine into the rootSaga
            ...loginSaga,
            ...userSaga,
            ...organizationSaga,
            ...projectState,
            ...talentGroupSaga,
            // ...homePageSaga,
            ...categoryState,
            ...surveysSaga,
        ]);
    } catch (err) {
        // This is where error monitoring should go
        console.log('error caught in rootsaga::', err);
    }
}
