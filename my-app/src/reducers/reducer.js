import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
    data: 0
}

const postSuccess = (state,action) =>{
    console.log("post finished")
   return updateObject(state,{
       data:action.incoming_data
   } )
}

const rootReducer = (state = initState,action) =>{
    switch(action.type){
        case actionTypes.Fetch_Successful: return postSuccess(state,action)
        default: return state;
    }
}

export default rootReducer;