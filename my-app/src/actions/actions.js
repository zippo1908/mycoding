
import axios from "axios"
import * as actionTypes from './actionTypes';

export const fetchFinished = (data) =>{
    console.log("fetch finished")
    return{
        type: actionTypes.Fetch_Successful,
        incoming_data: data
    }
}

export const userFetch = (data) =>{
    return dispatch => {
        console.log(data)
        axios.post("http://localhost:3001/endpoint.com/track",data,{headers: {
            'Access-Control-Allow-Origin': '*'
          }}).then(responese =>{
              console.log(responese.data)
              dispatch(fetchFinished(responese.data));
          })
    }
}