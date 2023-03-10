import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

// import thunk from 'redux-thunk';
import allReducers from './Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: null,
  blacklist: ['loader', 'socket'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

export const persistor = persistStore(store);

