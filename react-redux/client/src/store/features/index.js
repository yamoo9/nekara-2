import { combineReducers } from 'redux';

import { vowelsApi } from 'services/vowels';
import authReducer from './auth';
import ballReducer from '../slices/ball';

export default combineReducers({
  auth: authReducer,
  ball: ballReducer,
  [vowelsApi.reducerPath]: vowelsApi.reducer,
});
