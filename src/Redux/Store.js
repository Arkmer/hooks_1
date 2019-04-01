import { combineReducers, createStore } from 'redux';
import navReducer from './Reducers/navReducer';
import homeReducer from './Reducers/homeReducer';
import militaryReducer from './Reducers/militaryReducer';

const storeInstance = combineReducers({
  navReducer,
  homeReducer,
  militaryReducer,
});

export default createStore(storeInstance);