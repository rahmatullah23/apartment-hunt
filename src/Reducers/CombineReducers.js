import {combineReducers} from 'redux';
import counterReducer from './DisplayReducer';

const allReducers = combineReducers({ counterReducer });

export default allReducers;