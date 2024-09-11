export const Reducer=(state,action)=>{
    switch(action.type){
        case "success":{
           return {
            post:action.payload, 
        }
    }
        case "error":{
            return {
                post:{},
            }
        }
        default:{
            return state
        }
    }
}