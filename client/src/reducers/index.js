import { combineReducers, combineReduces } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer
});