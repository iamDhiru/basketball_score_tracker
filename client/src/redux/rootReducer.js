import {combineReducers} from 'redux';
import {matchReducer} from './match/matchReducer';

const rootReducer = combineReducers({
    match: matchReducer 
})

export default rootReducer;
