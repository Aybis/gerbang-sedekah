import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import donatur from './donatur';
import campaign from './campaign';
import payment from './payment';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'donatur', 'campaign', 'payment'],
};

const rootReducer = combineReducers({
  user,
  donatur,
  campaign,
  payment,
});

export default persistReducer(persistConfig, rootReducer);
