import axios from "axios";
import { useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";

export const initial_state={
    post:{},
    arry:{}
}

const Service=()=>{
    const [state,dispatch]=useReducer(Reducer,initial_state)
    useEffect(()=>{
        axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2021-06-22&departmentIds=3&hasimages=true").then((res)=>{
            dispatch({type:"success",payload:res.data})
        }).catch(e=>{
            dispatch({type:"error"})
        })
        console.log(state)
    },[])
    return [state,dispatch]
}
export default Service;