/**
 * @file root reducer
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
import { combineReducers } from 'redux';

// combine all the reducer in here
const rootReducer = combineReducers({});
// export the root reducer state
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
