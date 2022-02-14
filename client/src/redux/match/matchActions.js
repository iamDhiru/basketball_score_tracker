import { configuration } from '../services/appConfig';
import axios from 'axios'
import {
    GET_MATCH,
    ADD_MATCH
} from './matchActionTypes';

// Action  creators
export const getMatch = (payload) =>{
    console.log("match", payload);
    return{
        type: GET_MATCH,
        payload: payload
    }
}

export const addMatch = (payload) =>{
    console.log("match", payload);
    return{
        type: ADD_MATCH,
        payload: payload
    }
}

// Action for fetching all the matches
export const getAllMatches = () => async (dispatch) =>{
    const url = configuration.apiBaseUrl+'/matches';
    try{
        const res = await axios.get(url);
        if(res){
            dispatch(getMatch(res.data));
        }
        return res;
    } catch(error){
        console.log(error.message)
    }
}

// Action for adding match details
export const addMatchDetails = (formData) => async (dispatch) =>{
    const {team1Name, team2Name, team1Score, team2Score, winner} = formData;
    const url = configuration.apiBaseUrl+'/match';
    try{
        const res =  await fetch(url,{
            method: "POST",
            headers:{
               "Content-Type":"application/json"
            },
            body: JSON.stringify({
                team1Name, team2Name, team1Score, team2Score, winner
            })
        })
        const data = await res.json();
        dispatch(addMatch(data));
        console.log("added",data);
        // alert("success")
        return res;
    } catch(error){
        console.log(error.message)
    }
    
}

