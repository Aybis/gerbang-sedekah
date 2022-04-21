import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import donatur from './donatur';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'donatur'],
};

const rootReducer = combineReducers({
  user,
  donatur,
});

export default persistReducer(persistConfig, rootReducer);
