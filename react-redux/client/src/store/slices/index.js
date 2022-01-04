import { combineReducers } from 'redux';

import ballReducer from './ball';
import authReducer from './auth';

const rootReducer = combineReducers({
  ball: ballReducer,
  auth: authReducer,
});

export default rootReducer;
