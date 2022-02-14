import {
    GET_MATCH,
    ADD_MATCH
} from './matchActionTypes';

const initialState = {
    match:[],
    error:"",
    loading: true
}

export const matchReducer = (state=initialState, action) => {
    const {type, payload} = action;
    
    switch(type){
        case GET_MATCH:
            return {
                ...state,
                match: payload,
                loading:false
            };
        case ADD_MATCH:
            return {
                ...state,
                match: [...state.match, payload],
                loading: false
            }
        default: return state
    }
}